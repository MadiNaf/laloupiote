import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosmenusComponent } from './nosmenus.component';

describe('NosmenusComponent', () => {
  let component: NosmenusComponent;
  let fixture: ComponentFixture<NosmenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosmenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
