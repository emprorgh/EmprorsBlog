import { TestBed } from '@angular/core/testing';

import { BatchrunService } from './batchrun.service';

describe('BatchrunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchrunService = TestBed.get(BatchrunService);
    expect(service).toBeTruthy();
  });
});
