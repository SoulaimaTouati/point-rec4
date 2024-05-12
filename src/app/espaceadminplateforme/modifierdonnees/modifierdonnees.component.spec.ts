import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdonneesComponent } from './modifierdonnees.component';

describe('ModifierdonneesComponent', () => {
  let component: ModifierdonneesComponent;
  let fixture: ComponentFixture<ModifierdonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierdonneesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierdonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
