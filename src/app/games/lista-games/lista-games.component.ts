import { Component, OnInit } from '@angular/core';
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

  games$!: Observable<Games>;

  constructor(private usuarioService: UsuarioService, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.gamesService.listaGamesDoUsuario(userName);
      })
    )
  }
}
