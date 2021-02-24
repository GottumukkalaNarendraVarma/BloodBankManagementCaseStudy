import { TestBed } from '@angular/core/testing';

import { DonorauthguardService } from './donorauthguard.service';

describe('DonorauthguardService', () => {
  let service: DonorauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
