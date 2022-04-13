import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFormComponent } from './level-form.component';

describe('LevelFormComponent', () => {
  let component: LevelFormComponent;
  let fixture: ComponentFixture<LevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
