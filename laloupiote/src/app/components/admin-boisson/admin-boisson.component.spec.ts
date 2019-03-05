import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBoissonComponent } from './admin-boisson.component';

describe('AdminBoissonComponent', () => {
  let component: AdminBoissonComponent;
  let fixture: ComponentFixture<AdminBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
