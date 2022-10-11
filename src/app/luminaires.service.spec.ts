import { TestBed } from '@angular/core/testing';

import { LuminairesService } from './luminaires.service';

describe('LuminairesService', () => {
  let service: LuminairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuminairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
