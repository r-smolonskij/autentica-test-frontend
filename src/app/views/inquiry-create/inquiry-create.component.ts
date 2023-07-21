import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceService } from 'src/app/services/device.service';
import { InquiryService } from 'src/app/services/inquiry.service';

@Component({
  selector: 'app-inquiry-create',
  templateUrl: './inquiry-create.component.html',
  styleUrls: ['./inquiry-create.component.css'],
})
export class InquiryCreateComponent {
  devicesList: Device[] = [];
  createForm = new FormGroup({
    device: new FormControl('', [Validators.required]),
    justification: new FormControl(''),
  });

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private inquiryService: InquiryService
  ) {}

  ngOnInit() {
    this.deviceService.getDevices().subscribe(
      (devices) => (this.devicesList = devices),
      (err) => {
        this.router.navigateByUrl('/inquiries');
      }
    );
  }

  onSubmit(): void {
    let formValue = this.createForm.value;
    if (formValue.device) {
      this.inquiryService
        .addInquiry(Number(formValue.device), formValue.justification || '')
        .subscribe(
          (inquiry) => {
            this.router.navigateByUrl('/inquiries');
          },
          (err) => {
            //In best scenario show error in view
            this.router.navigateByUrl('/inquiries');
          }
        );
    }
  }
}
