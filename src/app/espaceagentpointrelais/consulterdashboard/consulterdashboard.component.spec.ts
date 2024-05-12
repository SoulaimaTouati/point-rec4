import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdashboardagentComponent } from './consulterdashboardagent.component';

describe('ConsulterdashboardComponent', () => {
  let component: ConsulterdashboardagentComponent;
  let fixture: ComponentFixture<ConsulterdashboardagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterdashboardagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterdashboardagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
