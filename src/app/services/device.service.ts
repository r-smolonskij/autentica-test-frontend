import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../models/Device';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private apiUrl = 'http://localhost:8080/api/v1/device';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  getDevice(id: number): Observable<Device> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Device>(url);
  }

  addDevice(name: string, parameters: string): Observable<Device> {
    let device: Device = { name, parameters };
    return this.http.post<Device>(this.apiUrl, device, httpOptions);
  }

  editDevice(device: Device): Observable<Device> {
    const url = `${this.apiUrl}/${device.id}`;
    console.log(device);
    return this.http.put<Device>(url, device, httpOptions);
  }

  deleteDevice(id?: number): Observable<Device> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Device>(url, httpOptions);
  }
}
