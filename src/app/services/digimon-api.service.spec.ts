import { TestBed } from '@angular/core/testing';

import { DigimonApiService } from './digimon-api.service';

describe('DigimonApiService', () => {
  let service: DigimonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
