import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointrelaisComponent } from './pointrelais.component';

describe('PointrelaisComponent', () => {
  let component: PointrelaisComponent;
  let fixture: ComponentFixture<PointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
