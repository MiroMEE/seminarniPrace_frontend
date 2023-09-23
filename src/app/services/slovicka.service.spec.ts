import { TestBed } from '@angular/core/testing';

import { SlovickaService } from './slovicka.service';

describe('SlovickaService', () => {
  let service: SlovickaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlovickaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
