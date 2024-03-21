import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminplateformeComponent } from './adminplateforme.component';

describe('AdminplateformeComponent', () => {
  let component: AdminplateformeComponent;
  let fixture: ComponentFixture<AdminplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminplateformeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
