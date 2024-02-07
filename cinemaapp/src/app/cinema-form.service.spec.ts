import { TestBed } from '@angular/core/testing';

import { CinemaFormService } from './cinema-form.service';

describe('CinemaFormService', () => {
  let service: CinemaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
