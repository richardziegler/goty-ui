import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gotyUrl = 'http://localhost:8090/api/v1/games';

  /** GET heroes from the server */
getGames (): Observable<Game[]> {
  return this.http.get<Game[]>(this.gotyUrl);
  console.log(this.gotyUrl);
}

  constructor(
    private http: HttpClient) { }
}
