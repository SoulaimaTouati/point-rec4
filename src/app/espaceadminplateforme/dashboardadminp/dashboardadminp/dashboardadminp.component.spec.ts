import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadminpComponent } from './dashboardadminp.component';

describe('DashboardadminpComponent', () => {
  let component: DashboardadminpComponent;
  let fixture: ComponentFixture<DashboardadminpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardadminpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardadminpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
