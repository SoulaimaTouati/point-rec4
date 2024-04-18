import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecteradminpointrelaisComponent } from './affecteradminpointrelais.component';

describe('AffecteradminpointrelaisComponent', () => {
  let component: AffecteradminpointrelaisComponent;
  let fixture: ComponentFixture<AffecteradminpointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffecteradminpointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffecteradminpointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
