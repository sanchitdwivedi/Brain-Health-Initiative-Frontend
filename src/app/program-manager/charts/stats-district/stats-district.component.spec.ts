import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDistrictComponent } from './stats-district.component';

describe('StatsDistrictComponent', () => {
  let component: StatsDistrictComponent;
  let fixture: ComponentFixture<StatsDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
