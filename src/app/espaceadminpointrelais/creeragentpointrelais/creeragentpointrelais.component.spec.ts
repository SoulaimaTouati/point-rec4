import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeragentpointrelaisComponent } from './creeragentpointrelais.component';

describe('CreeragentpointrelaisComponent', () => {
  let component: CreeragentpointrelaisComponent;
  let fixture: ComponentFixture<CreeragentpointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreeragentpointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreeragentpointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
