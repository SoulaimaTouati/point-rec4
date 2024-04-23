import { TestBed } from '@angular/core/testing';

import { AprsidebarService } from './aprsidebar.service';

describe('AprsidebarService', () => {
  let service: AprsidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprsidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
