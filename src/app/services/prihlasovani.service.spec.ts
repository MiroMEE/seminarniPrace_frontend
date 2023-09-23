import { TestBed } from '@angular/core/testing';

import { PrihlasovaniService } from './prihlasovani.service';

describe('PrihlasovaniService', () => {
  let service: PrihlasovaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrihlasovaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
