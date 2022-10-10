import { TestBed } from '@angular/core/testing';

import { CustoVariavelService } from './custo-variavel.service';

describe('CustoVariavelService', () => {
  let service: CustoVariavelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoVariavelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
