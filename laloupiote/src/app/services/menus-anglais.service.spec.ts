import { TestBed } from '@angular/core/testing';

import { MenusAnglaisService } from './menus-anglais.service';

describe('MenusAnglaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenusAnglaisService = TestBed.get(MenusAnglaisService);
    expect(service).toBeTruthy();
  });
});
