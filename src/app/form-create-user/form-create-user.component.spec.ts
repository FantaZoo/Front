import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateUserComponent } from './form-create-user.component';

describe('FormCreateUserComponent', () => {
  let component: FormCreateUserComponent;
  let fixture: ComponentFixture<FormCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
