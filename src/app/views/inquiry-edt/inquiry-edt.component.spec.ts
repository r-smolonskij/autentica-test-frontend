import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryEdtComponent } from './inquiry-edt.component';

describe('InquiryEdtComponent', () => {
  let component: InquiryEdtComponent;
  let fixture: ComponentFixture<InquiryEdtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryEdtComponent]
    });
    fixture = TestBed.createComponent(InquiryEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
