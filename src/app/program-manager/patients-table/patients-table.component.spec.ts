import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsTableComponent } from './patients-table.component';

describe('PatientsTableComponent', () => {
  let component: PatientsTableComponent;
  let fixture: ComponentFixture<PatientsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
