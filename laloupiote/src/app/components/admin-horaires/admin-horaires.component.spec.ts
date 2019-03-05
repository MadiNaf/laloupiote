import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHorairesComponent } from './admin-horaires.component';

describe('AdminHorairesComponent', () => {
  let component: AdminHorairesComponent;
  let fixture: ComponentFixture<AdminHorairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHorairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHorairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
