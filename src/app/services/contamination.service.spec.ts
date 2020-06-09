import { TestBed } from '@angular/core/testing';

import { ContaminationService } from './contamination.service';

describe('ContaminationService', () => {
  let service: ContaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
