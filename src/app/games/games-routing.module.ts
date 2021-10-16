import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheGameComponent } from './detalhe-game/detalhe-game.component';

import { ListaGamesComponent } from './lista-games/lista-games.component';
import { ListaGamesResolver } from './lista-games/lista-games.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaGamesComponent,
    resolve: {
      games: ListaGamesResolver
    }
  },
  {
    path: ':gameId',
    component: DetalheGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
