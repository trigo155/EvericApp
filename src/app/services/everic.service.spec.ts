import { TestBed } from '@angular/core/testing';

import { EvericService } from './everic.service';

describe('EvericService', () => {
  let service: EvericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
