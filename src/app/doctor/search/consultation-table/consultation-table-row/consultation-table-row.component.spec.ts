import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTableRowComponent } from './consultation-table-row.component';

describe('ConsultationTableRowComponent', () => {
  let component: ConsultationTableRowComponent;
  let fixture: ComponentFixture<ConsultationTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
