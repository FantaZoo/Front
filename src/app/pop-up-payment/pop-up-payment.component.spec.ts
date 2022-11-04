import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPaymentComponent } from './pop-up-payment.component';

describe('PopUpPaymentComponent', () => {
  let component: PopUpPaymentComponent;
  let fixture: ComponentFixture<PopUpPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
