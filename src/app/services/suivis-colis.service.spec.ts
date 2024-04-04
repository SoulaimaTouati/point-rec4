import { TestBed } from '@angular/core/testing';

import { SuiviColisService } from './suivis-colis.service';

describe('SuivisColisService', () => {
  let service: SuiviColisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviColisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
