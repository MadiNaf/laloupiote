import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNosmenusComponent } from './admin-nosmenus.component';

describe('AdminNosmenusComponent', () => {
  let component: AdminNosmenusComponent;
  let fixture: ComponentFixture<AdminNosmenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNosmenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNosmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
