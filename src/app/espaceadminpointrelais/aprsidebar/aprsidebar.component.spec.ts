import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprsidebarComponent } from './aprsidebar.component';

describe('AprsidebarComponent', () => {
  let component: AprsidebarComponent;
  let fixture: ComponentFixture<AprsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AprsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AprsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
