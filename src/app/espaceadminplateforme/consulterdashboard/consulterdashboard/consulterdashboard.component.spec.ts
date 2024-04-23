import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdashboardComponent } from './consulterdashboard.component';

describe('ConsulterdashboardComponent', () => {
  let component: ConsulterdashboardComponent;
  let fixture: ComponentFixture<ConsulterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
