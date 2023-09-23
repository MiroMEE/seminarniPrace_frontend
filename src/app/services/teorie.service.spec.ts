import { TestBed } from '@angular/core/testing';

import { TeorieService } from './teorie.service';

describe('TeorieService', () => {
  let service: TeorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
