import { TestBed, inject } from '@angular/core/testing';

import { AgiauthService } from './agiauth.service';

describe('AgiauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgiauthService]
    });
  });

  it('should be created', inject([AgiauthService], (service: AgiauthService) => {
    expect(service).toBeTruthy();
  }));
});
