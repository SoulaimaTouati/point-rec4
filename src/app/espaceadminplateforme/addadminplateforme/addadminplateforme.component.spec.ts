import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminplateformeComponent } from './addadminplateforme.component';

describe('AddadminplateformeComponent', () => {
  let component: AddadminplateformeComponent;
  let fixture: ComponentFixture<AddadminplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddadminplateformeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddadminplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
