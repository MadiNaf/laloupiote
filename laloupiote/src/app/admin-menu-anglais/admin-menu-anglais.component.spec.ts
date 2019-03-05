import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuAnglaisComponent } from './admin-menu-anglais.component';

describe('AdminMenuAnglaisComponent', () => {
  let component: AdminMenuAnglaisComponent;
  let fixture: ComponentFixture<AdminMenuAnglaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuAnglaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuAnglaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
