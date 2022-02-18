import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalOfficerComponent } from './medical-officer.component';

describe('MedicalOfficerComponent', () => {
  let component: MedicalOfficerComponent;
  let fixture: ComponentFixture<MedicalOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
