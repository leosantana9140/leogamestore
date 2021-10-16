import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Games } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-lista-games',
  templateUrl: './lista-games.component.html',
  styleUrls: ['./lista-games.component.css']
})
export class ListaGamesComponent implements OnInit {

  games!: Games;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.games = this.activatedRoute.snapshot.data['games'];
    });
  }
}
