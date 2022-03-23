import { TestBed } from '@angular/core/testing';

import { DateShareService } from './date-share.service';

describe('DateShareService', () => {
  let service: DateShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
