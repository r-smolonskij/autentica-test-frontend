import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css'],
})
export class DeviceCreateComponent {
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    parameters: new FormControl(''),
  });

  constructor(private router: Router, private deviceService: DeviceService) {}

  onSubmit(): void {
    let formValue = this.createForm.value;
    if (formValue.name) {
      this.deviceService
        .addDevice(formValue.name, formValue.parameters || '')
        .subscribe(
          (device) => {
            this.router.navigateByUrl('/devices');
          },
          (err) => {
            //In best scenario show error in view
            this.router.navigateByUrl('/devices');
          }
        );
    }
  }
}
