import { TestBed } from '@angular/core/testing';

import { HorairesService } from './horaires.service';

describe('HorairesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorairesService = TestBed.get(HorairesService);
    expect(service).toBeTruthy();
  });
});
