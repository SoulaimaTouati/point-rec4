import { TestBed } from '@angular/core/testing';

import { AgentpointrelaisService } from './agentpointrelais.service';

describe('AgentpointrelaisService', () => {
  let service: AgentpointrelaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentpointrelaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
