import { TestBed } from '@angular/core/testing';

import { DoctorAuthService } from './doctor-auth.service';

describe('DoctorAuthService', () => {
  let service: DoctorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
