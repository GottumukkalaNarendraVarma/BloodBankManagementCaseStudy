import { TestBed } from '@angular/core/testing';

import { RequestorauthenticationService } from './requestorauthentication.service';

describe('RequestorauthenticationService', () => {
  let service: RequestorauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestorauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
