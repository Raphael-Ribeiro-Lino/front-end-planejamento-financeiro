import { TestBed } from '@angular/core/testing';

import { CustoFixoService } from './custo-fixo.service';

describe('CustoFixoService', () => {
  let service: CustoFixoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoFixoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
