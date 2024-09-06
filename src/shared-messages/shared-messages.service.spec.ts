import { TestBed } from '@angular/core/testing';

import { SharedMessagesService } from './shared-messages.service';

describe('SharedMessagesService', () => {
  let service: SharedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
