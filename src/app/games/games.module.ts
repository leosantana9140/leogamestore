import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ListaGamesComponent } from './lista-games/lista-games.component';
import { GameComponent } from './game/game.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeCapasGamesComponent } from './grade-capas-games/grade-capas-games.component';
import { DetalheGameComponent } from './detalhe-game/detalhe-game.component';
import { ComentariosComponent } from './detalhe-game/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListaGamesComponent,
    GameComponent,
    GradeCapasGamesComponent,
    DetalheGameComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class GamesModule { }
