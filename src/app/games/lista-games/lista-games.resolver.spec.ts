import { TestBed } from '@angular/core/testing';

import { ListaGamesResolver } from './lista-games.resolver';

describe('ListaGamesResolver', () => {
  let resolver: ListaGamesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaGamesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
