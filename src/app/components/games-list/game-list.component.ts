import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.services";
import { Game } from "../../interfaces/game.interface";
import { GameFilter } from "../../interfaces/game-filter.interface";

@Component({
  selector: 'app-games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  genres: string[] = [];
  platforms: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGames().subscribe(
      (response: Game[]) => {
        this.games = response;
        this.filteredGames = [...this.games];

        this.genres = this.getGenres();
        this.platforms = this.getPlatforms();
      },
      (error: any) => {
        console.error('Failed to fetch games:', error)
      }
    );
  }

  applyFilters(filters: GameFilter): void {
    this.filteredGames = this.games.filter(game => {
      const nameMatch = game.title.toLowerCase().includes(filters.name.toLowerCase());
      const genreMatch = filters.genre === '' || game.genre.toLowerCase() === filters.genre.toLowerCase();
      const platformMatch = filters.platform === '' || game.platform.toLowerCase() === filters.platform.toLowerCase();
      return nameMatch && genreMatch && platformMatch;
    });
  }

  private getGenres(): string[] {
    return Array.from(new Set(this.games.map(game => game.genre.toLowerCase())));
  }

  private getPlatforms(): string[] {
    return Array.from(new Set(this.games.map(game => game.platform.toLowerCase())));
  }
}
