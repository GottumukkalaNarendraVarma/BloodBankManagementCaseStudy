import { TestBed } from '@angular/core/testing';

import { DonatebloodService } from './donateblood.service';

describe('DonatebloodService', () => {
  let service: DonatebloodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatebloodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
