import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPatientsOutPatientsComponent } from './in-patients-out-patients.component';

describe('InPatientsOutPatientsComponent', () => {
  let component: InPatientsOutPatientsComponent;
  let fixture: ComponentFixture<InPatientsOutPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InPatientsOutPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InPatientsOutPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
