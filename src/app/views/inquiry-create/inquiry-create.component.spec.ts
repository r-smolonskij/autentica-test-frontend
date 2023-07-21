import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCreateComponent } from './inquiry-create.component';

describe('InquiryCreateComponent', () => {
  let component: InquiryCreateComponent;
  let fixture: ComponentFixture<InquiryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryCreateComponent]
    });
    fixture = TestBed.createComponent(InquiryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
