import { TestBed } from '@angular/core/testing';

import { SisMedService } from './sis-med.service';

describe('SisMedService', () => {
  let service: SisMedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SisMedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
