import { Component } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { InquiryService } from 'src/app/services/inquiry.service';
import { Inquiry } from 'src/app/models/Inquiry';

@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css'],
})
export class InquiryListComponent {
  search: string = '';
  loading: boolean = false;
  inquriesList: Inquiry[] = [];
  statuses: String[] = ['requested', 'confirmed', 'rejected'];
  relatedDevicesList: Device[] = [];
  faTrash = faTrash;
  faPen = faPen;

  constructor(private inquiryService: InquiryService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.inquiryService.getInquiries().subscribe(
      (inquiries) => {
        this.loading = false;
        this.inquriesList = inquiries;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  onDeleteClick(inquiry: Inquiry): void {
    this.inquiryService
      .deleteInquiry(inquiry.id)
      .subscribe((deletedInquiry) => {
        this.inquriesList = [...this.inquriesList].filter(
          (inq) => inq.id !== inquiry.id
        );
      });
  }

  onStatusChange(value: any, inquiry: Inquiry): void {
    let editedInquiry = Object.assign({}, inquiry);
    editedInquiry.status = value.target.value;
    this.inquiryService.editInquiry(editedInquiry).subscribe(
      (inquiry) => {},
      (err) => {
        //In best scenario show error in view
      }
    );
  }

  get filteredInqueries() {
    return this.inquriesList.filter((inquiry) =>
      `${inquiry.justification || ''}${inquiry.deviceId || ''}`
        .toLowerCase()
        .trim()
        .includes(this.search.toLowerCase().trim())
    );
  }
}
