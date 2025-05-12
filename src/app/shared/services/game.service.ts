import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private apiUrl = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  add(game: Game): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl, game);
  }

  getAll(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.apiUrl);
  }
}
