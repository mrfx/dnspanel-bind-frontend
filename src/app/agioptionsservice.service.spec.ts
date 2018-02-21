import { TestBed, inject } from '@angular/core/testing';

import { AgioptionsserviceService } from './agioptionsservice.service';

describe('AgioptionsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgioptionsserviceService]
    });
  });

  it('should be created', inject([AgioptionsserviceService], (service: AgioptionsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
