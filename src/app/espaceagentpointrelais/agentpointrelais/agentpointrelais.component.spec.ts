import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpointrelaisComponent } from './agentpointrelais.component';

describe('AgentpointrelaisComponent', () => {
  let component: AgentpointrelaisComponent;
  let fixture: ComponentFixture<AgentpointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentpointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentpointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
