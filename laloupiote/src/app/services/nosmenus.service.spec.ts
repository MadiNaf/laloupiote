import { TestBed } from '@angular/core/testing';

import { NosmenusService } from './nosmenus.service';

describe('NosmenusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NosmenusService = TestBed.get(NosmenusService);
    expect(service).toBeTruthy();
  });
});
