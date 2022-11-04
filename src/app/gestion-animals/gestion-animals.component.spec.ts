import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnimalsComponent } from './gestion-animals.component';

describe('GestionAnimalsComponent', () => {
  let component: GestionAnimalsComponent;
  let fixture: ComponentFixture<GestionAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
