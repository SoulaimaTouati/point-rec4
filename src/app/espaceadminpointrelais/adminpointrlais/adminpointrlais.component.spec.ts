import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpointrlaisComponent } from './adminpointrlais.component';

describe('AdminpointrlaisComponent', () => {
  let component: AdminpointrlaisComponent;
  let fixture: ComponentFixture<AdminpointrlaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpointrlaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpointrlaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
