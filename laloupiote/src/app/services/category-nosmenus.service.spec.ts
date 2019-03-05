import { TestBed } from '@angular/core/testing';

import { CategoryNosmenusService } from './category-nosmenus.service';

describe('CategoryNosmenusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryNosmenusService = TestBed.get(CategoryNosmenusService);
    expect(service).toBeTruthy();
  });
});
