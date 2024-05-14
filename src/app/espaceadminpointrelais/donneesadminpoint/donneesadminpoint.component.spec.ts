import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesadminpointComponent } from './donneesadminpoint.component';

describe('DonneesadminpointComponent', () => {
  let component: DonneesadminpointComponent;
  let fixture: ComponentFixture<DonneesadminpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonneesadminpointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonneesadminpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
