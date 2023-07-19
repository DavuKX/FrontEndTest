import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from "../config";
import {Game} from "../components/interfaces/game.interface";
import {GameDetails} from "../components/interfaces/game-details.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = API_URL;

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  getGameDetails(id: number) {
    return this.http.get<GameDetails>(`${this.baseUrl}/game?id=${id}`);
  }
}
