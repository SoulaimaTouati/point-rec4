import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointrelaisadminComponent } from './pointrelaisadmin.component';

describe('PointrelaisadminComponent', () => {
  let component: PointrelaisadminComponent;
  let fixture: ComponentFixture<PointrelaisadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointrelaisadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointrelaisadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
