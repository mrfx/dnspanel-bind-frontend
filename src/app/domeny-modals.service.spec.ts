import { TestBed, inject } from '@angular/core/testing';

import { DomenyModalsService } from './domeny-modals.service';

describe('DomenyModalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomenyModalsService]
    });
  });

  it('should be created', inject([DomenyModalsService], (service: DomenyModalsService) => {
    expect(service).toBeTruthy();
  }));
});
