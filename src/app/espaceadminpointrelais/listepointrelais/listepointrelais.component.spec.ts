import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepointrelaisComponent } from './listepointrelais.component';

describe('ListepointrelaisComponent', () => {
  let component: ListepointrelaisComponent;
  let fixture: ComponentFixture<ListepointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListepointrelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListepointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
