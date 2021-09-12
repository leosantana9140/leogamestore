import { Component, OnInit } from '@angular/core';
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

  constructor(private usuarioService: UsuarioService, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.gamesService.listaGamesDoUsuario(userName).subscribe((games) => {
        this.games = games;
      })
    })
  }
}
