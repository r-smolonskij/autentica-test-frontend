import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesListComponent } from './views/devices-list/devices-list.component';
import { DeviceCreateComponent } from './views/device-create/device-create.component';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { InquiryListComponent } from './views/inquiry-list/inquiry-list.component';
import { InquiryCreateComponent } from './views/inquiry-create/inquiry-create.component';
import { InquiryEdtComponent } from './views/inquiry-edt/inquiry-edt.component';

const routes: Routes = [
  { path: "", redirectTo: "/devices", pathMatch: "full" },
  { path: "devices", component: DevicesListComponent },
  { path: "devices/create", component: DeviceCreateComponent },
  { path: "devices/edit/:id", component: DeviceEditComponent },
  { path: "inquiries", component: InquiryListComponent },
  { path: "inquiries/create", component: InquiryCreateComponent },
  { path: "inquiries/edit/:id", component: InquiryEdtComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
