import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourcolisComponent } from './retourcolis.component';

describe('RetourcolisComponent', () => {
  let component: RetourcolisComponent;
  let fixture: ComponentFixture<RetourcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetourcolisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetourcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
