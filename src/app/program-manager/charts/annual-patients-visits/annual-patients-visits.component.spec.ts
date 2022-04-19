import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { AnnualPatientsVisitsComponent } from './annual-patients-visits.component';

describe('AnnualPatientsVisitsComponent', () => {
  let component: AnnualPatientsVisitsComponent;
  let fixture: ComponentFixture<AnnualPatientsVisitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualPatientsVisitsComponent ],
      imports: [ ChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPatientsVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
