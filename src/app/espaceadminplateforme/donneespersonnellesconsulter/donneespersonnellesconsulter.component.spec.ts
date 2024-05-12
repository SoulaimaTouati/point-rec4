import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneespersonnellesconsulterComponent } from './donneespersonnellesconsulter.component';

describe('DonneespersonnellesconsulterComponent', () => {
  let component: DonneespersonnellesconsulterComponent;
  let fixture: ComponentFixture<DonneespersonnellesconsulterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonneespersonnellesconsulterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonneespersonnellesconsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
