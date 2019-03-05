import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesComponent } from './horaires.component';

describe('HorairesComponent', () => {
  let component: HorairesComponent;
  let fixture: ComponentFixture<HorairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
