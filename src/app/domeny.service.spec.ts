import { TestBed, inject } from '@angular/core/testing';

import { DomenyService } from './domeny.service';

describe('DomenyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomenyService]
    });
  });

  it('should be created', inject([DomenyService], (service: DomenyService) => {
    expect(service).toBeTruthy();
  }));
});
