import { TestBed } from '@angular/core/testing';

import { PointrelaisService } from './pointrelais.service';

describe('PointrelaisService', () => {
  let service: PointrelaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointrelaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
