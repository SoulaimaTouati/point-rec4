import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdonneepersonnelComponent } from './consulterdonneepersonnel.component';

describe('ConsulterdonneepersonnelComponent', () => {
  let component: ConsulterdonneepersonnelComponent;
  let fixture: ComponentFixture<ConsulterdonneepersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterdonneepersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterdonneepersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
