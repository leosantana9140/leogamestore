import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private gameService: GamesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.params.gameId;
    this.game$ = this.gameService.buscaPorId(this.gameId);
  }

  curtir() {
    this.gameService.curtir(this.gameId).subscribe((curtida) => {
      if (curtida) {
        this.game$ = this.gameService.buscaPorId(this.gameId);
      }
    });
  }

  excluir() {
    this.gameService.excluiGame(this.gameId).subscribe(() => {
      this.router.navigate(['/games/'])
    }, (error) => console.log(error));
  }
}
