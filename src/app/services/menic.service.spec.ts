import { TestBed } from '@angular/core/testing';

import { MenicService } from './menic.service';

describe('MenicService', () => {
  let service: MenicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
