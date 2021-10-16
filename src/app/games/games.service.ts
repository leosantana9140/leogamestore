import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Game, Games } from './game';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaGamesDoUsuario(nomeUsuario: string):Observable<Games> {
    return this.http.get<Games>(`${API}/${nomeUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Game> {
    return this.http.get<Game>(`${API}/photos/${id}`);
  }

  excluiGame(id: number):Observable<Game> {
    return this.http.delete<Game>(`${API}/photos/${id}`);
  }

  curtir(id: number):Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
    );
  }
}
