import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateAnimalComponent } from './form-create-animal.component';

describe('FormCreateAnimalComponent', () => {
  let component: FormCreateAnimalComponent;
  let fixture: ComponentFixture<FormCreateAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
