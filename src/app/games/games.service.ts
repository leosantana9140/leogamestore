import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Game, Games } from './game';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaGamesDoUsuario(nomeUsuario: string):Observable<Games> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Games>(`${API}/${nomeUsuario}/photos`, {
      headers
    });
  }

  buscaPorId(id: number): Observable<Game> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Game>(`${API}/photos/${id}`, {
      headers
    });
  }
}
