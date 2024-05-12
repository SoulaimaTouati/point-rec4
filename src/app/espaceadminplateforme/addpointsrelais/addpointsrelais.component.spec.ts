import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpointsrelaisComponent } from './addpointsrelais.component';

describe('AddpointsrelaisComponent', () => {
  let component: AddpointsrelaisComponent;
  let fixture: ComponentFixture<AddpointsrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpointsrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpointsrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
