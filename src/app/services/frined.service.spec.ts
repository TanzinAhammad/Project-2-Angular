import { TestBed } from '@angular/core/testing';

import { FrinedService } from './frined.service';

describe('FrinedService', () => {
  let service: FrinedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrinedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
