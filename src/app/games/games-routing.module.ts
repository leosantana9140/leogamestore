import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaGamesComponent } from './lista-games/lista-games.component';

const routes: Routes = [
  {
    path: '',
    component: ListaGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
