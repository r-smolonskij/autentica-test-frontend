import { Component } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent {
  search: string = '';
  loading: boolean = false;
  devicesList: Device[] = [];
  faTrash = faTrash;
  faPen = faPen;

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.loading = true;
    this.deviceService.getDevices().subscribe(
      (devices) => {
        this.loading = false;
        this.devicesList = devices;
      },
      (err) => {
        this.loading = false;
        console.log('HTTP Error', err);
      }
    );
  }

  onDeleteClick(device: Device): void {
    this.deviceService.deleteDevice(device.id).subscribe((deletedDevice) => {
      this.devicesList = [...this.devicesList].filter(
        (dev) => dev.id !== device.id
      );
    });
  }

  get filteredDevices() {
    return this.devicesList.filter((device) =>
      `${device.name || ''}${device.parameters || ''}`
        .toLowerCase()
        .trim()
        .includes(this.search.toLowerCase().trim())
    );
  }
}
