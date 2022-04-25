import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSymptomComponent } from './questionnaire-symptom.component';

describe('QuestionnaireSymptomComponent', () => {
  let component: QuestionnaireSymptomComponent;
  let fixture: ComponentFixture<QuestionnaireSymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireSymptomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
