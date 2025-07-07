import { TestBed } from '@angular/core/testing';

import { PizzariaService } from './pizzaria.service';

describe('PizzariaService', () => {
  let service: PizzariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
