import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-detalhe-game',
  templateUrl: './detalhe-game.component.html',
  styleUrls: ['./detalhe-game.component.css']
})
export class DetalheGameComponent implements OnInit {

  gameId!: number;
  game$!: Observable<Game>;

  constructor(private gameService: GamesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.params.gameId;
    this.game$ = this.gameService.buscaPorId(this.gameId);
  }
}
