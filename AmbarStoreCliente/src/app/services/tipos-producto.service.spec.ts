import { TestBed } from '@angular/core/testing';

import { TiposProductoService } from './tipos-producto.service';

describe('TiposProductoService', () => {
  let service: TiposProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
