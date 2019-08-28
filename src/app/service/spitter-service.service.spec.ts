import { TestBed } from '@angular/core/testing';

import { SpitterServiceService } from './spitter-service.service';

describe('SpitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpitterServiceService = TestBed.get(SpitterServiceService);
    expect(service).toBeTruthy();
  });
});
