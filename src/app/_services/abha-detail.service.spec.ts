import { TestBed } from '@angular/core/testing';

import { AbhaDetailService } from './abha-detail.service';

describe('AbhaDetailService', () => {
  let service: AbhaDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbhaDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
