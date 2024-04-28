import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandemodificationdonneeComponent } from './demandemodificationdonnee.component';

describe('DemandemodificationdonneeComponent', () => {
  let component: DemandemodificationdonneeComponent;
  let fixture: ComponentFixture<DemandemodificationdonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandemodificationdonneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandemodificationdonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
