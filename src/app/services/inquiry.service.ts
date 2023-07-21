import { Injectable } from '@angular/core';
import { Inquiry } from '../models/Inquiry';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  private apiUrl = 'http://localhost:8080/api/v1/inquiry';

  constructor(private http: HttpClient) {}

  getInquiries(): Observable<Inquiry[]> {
    return this.http.get<Inquiry[]>(this.apiUrl);
  }

  getInquiry(id: number): Observable<Inquiry> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Inquiry>(url);
  }

  addInquiry(deviceId: number, justification?: string): Observable<Inquiry> {
    let inquiry: Inquiry = {
      deviceId,
      justification,
      date: new Date(),
      status: 'requested',
    };
    return this.http.post<Inquiry>(this.apiUrl, inquiry, httpOptions);
  }

  editInquiry(inquiry: Inquiry): Observable<Inquiry> {
    const url = `${this.apiUrl}/${inquiry.id}`;
    return this.http.put<Inquiry>(url, inquiry, httpOptions);
  }

  deleteInquiry(id?: number): Observable<Inquiry> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Inquiry>(url, httpOptions);
  }
}
