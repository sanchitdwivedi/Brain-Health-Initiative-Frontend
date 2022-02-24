import { TestBed } from '@angular/core/testing';

import { PatientDetailService } from './patient-detail.service';

describe('PatientDetailService', () => {
  let service: PatientDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
