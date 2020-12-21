import { TestBed } from '@angular/core/testing';

import { AugurBackendService } from './augur-backend.service';

describe('AugurBackendService', () => {
  let service: AugurBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AugurBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
