import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTableComponent } from './consultation-table.component';

describe('ConsultationTableComponent', () => {
  let component: ConsultationTableComponent;
  let fixture: ComponentFixture<ConsultationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
