import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdonneesadminpointComponent } from './modifierdonneesadminpoint.component';

describe('ModifierdonneesadminpointComponent', () => {
  let component: ModifierdonneesadminpointComponent;
  let fixture: ComponentFixture<ModifierdonneesadminpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierdonneesadminpointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierdonneesadminpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
