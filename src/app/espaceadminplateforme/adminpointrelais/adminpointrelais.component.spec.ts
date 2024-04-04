import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpointrelaisComponent } from './adminpointrelais.component';

describe('AdminpointrelaisComponent', () => {
  let component: AdminpointrelaisComponent;
  let fixture: ComponentFixture<AdminpointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
