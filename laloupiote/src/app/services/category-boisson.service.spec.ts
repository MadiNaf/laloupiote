import { TestBed } from '@angular/core/testing';

import { CategoryBoissonService } from './category-boisson.service';

describe('CategoryBoissonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryBoissonService = TestBed.get(CategoryBoissonService);
    expect(service).toBeTruthy();
  });
});
