import { TestBed } from '@angular/core/testing';

import { RequestorauthguardService } from './requestorauthguard.service';

describe('RequestorauthguardService', () => {
  let service: RequestorauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestorauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
