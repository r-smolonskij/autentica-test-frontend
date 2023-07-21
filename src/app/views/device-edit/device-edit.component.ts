import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Device } from 'src/app/models/Device';
import { DeviceService } from 'src/app/services/device.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css'],
})
export class DeviceEditComponent {
  device?: Device;
  editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    parameters: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getDevice();
  }

  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDevice(id).subscribe((foundDevice) => {
      if (foundDevice) {
        this.device = foundDevice;
        this.editForm = new FormGroup({
          name: new FormControl(foundDevice.name, [Validators.required]),
          parameters: new FormControl(foundDevice.parameters || ''),
        });
      } else {
        this.location.back();
      }
    });
  }

  onSubmit(): void {
    let formValue = this.editForm.value;
    if (formValue.name && this.device) {
      let newDevice: Device = {
        id: this.device?.id,
        name: formValue.name,
        parameters: formValue.parameters,
      };
      this.deviceService.editDevice(newDevice).subscribe(
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
