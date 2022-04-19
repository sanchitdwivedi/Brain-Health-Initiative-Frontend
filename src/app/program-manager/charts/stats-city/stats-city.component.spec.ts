import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCityComponent } from './stats-city.component';

describe('StatsCityComponent', () => {
  let component: StatsCityComponent;
  let fixture: ComponentFixture<StatsCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
