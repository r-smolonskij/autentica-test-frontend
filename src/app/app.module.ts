import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DevicesListComponent } from './views/devices-list/devices-list.component';
import { DeviceCreateComponent } from './views/device-create/device-create.component';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquiryEdtComponent } from './views/inquiry-edt/inquiry-edt.component';
import { InquiryCreateComponent } from './views/inquiry-create/inquiry-create.component';
import { InquiryListComponent } from './views/inquiry-list/inquiry-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesListComponent,
    DeviceCreateComponent,
    DeviceEditComponent,
    InquiryEdtComponent,
    InquiryCreateComponent,
    InquiryListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
