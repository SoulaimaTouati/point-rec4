import { TestBed } from '@angular/core/testing';

import { AdminPointRelaisService } from './adminpointrelais.service';

describe('AdminpointrelaisService', () => {
  let service: AdminPointRelaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPointRelaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
