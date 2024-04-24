import { TestBed } from '@angular/core/testing';

import { AdminplateformeService } from './adminplateforme.service';

describe('AdminplateformeService', () => {
  let service: AdminplateformeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminplateformeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
