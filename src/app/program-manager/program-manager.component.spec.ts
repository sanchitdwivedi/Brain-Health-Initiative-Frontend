import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManagerComponent } from './program-manager.component';

describe('ProgramManagerComponent', () => {
  let component: ProgramManagerComponent;
  let fixture: ComponentFixture<ProgramManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
