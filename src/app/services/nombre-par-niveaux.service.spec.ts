import { TestBed } from '@angular/core/testing';

import { NombreParNiveauxService } from './nombre-par-niveaux.service';

describe('NombreParNiveauxService', () => {
  let service: NombreParNiveauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreParNiveauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
