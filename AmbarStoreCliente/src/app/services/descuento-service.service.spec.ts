import { TestBed } from '@angular/core/testing';

import { DescuentoServiceService } from './descuento-service.service';

describe('DescuentoServiceService', () => {
  let service: DescuentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescuentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
