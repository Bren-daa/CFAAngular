import { TestBed } from '@angular/core/testing';

import { VarMaisonService } from './var-maison.service';

describe('VarMaisonService', () => {
  let service: VarMaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarMaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
