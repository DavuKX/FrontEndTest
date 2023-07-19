import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from "../config";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = API_URL;

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.baseUrl}/games`);
  }

  getGameDetails(id: number) {
    return this.http.get(`${this.baseUrl}/game?id=${id}`);
  }
}
