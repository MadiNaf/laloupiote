import { TestBed } from '@angular/core/testing';

import { BoissonService } from './boisson.service';

describe('BoissonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoissonService = TestBed.get(BoissonService);
    expect(service).toBeTruthy();
  });
});
