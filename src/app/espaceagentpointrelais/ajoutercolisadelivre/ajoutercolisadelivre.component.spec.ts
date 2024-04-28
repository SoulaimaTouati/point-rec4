import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercolisadelivreComponent } from './ajoutercolisadelivre.component';

describe('AjoutercolisadelivreComponent', () => {
  let component: AjoutercolisadelivreComponent;
  let fixture: ComponentFixture<AjoutercolisadelivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutercolisadelivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutercolisadelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
