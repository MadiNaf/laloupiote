import { TestBed } from '@angular/core/testing';

import { InfoContactService } from './info-contact.service';

describe('InfoContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoContactService = TestBed.get(InfoContactService);
    expect(service).toBeTruthy();
  });
});
