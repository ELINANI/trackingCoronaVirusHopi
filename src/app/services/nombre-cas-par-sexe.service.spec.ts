import { TestBed } from '@angular/core/testing';

import { NombreCasParSexeService } from './nombre-cas-par-sexe.service';

describe('NombreCasParSexeService', () => {
  let service: NombreCasParSexeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreCasParSexeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
