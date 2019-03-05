import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusAnglaisComponent } from './menus-anglais.component';

describe('MenusAnglaisComponent', () => {
  let component: MenusAnglaisComponent;
  let fixture: ComponentFixture<MenusAnglaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusAnglaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusAnglaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
