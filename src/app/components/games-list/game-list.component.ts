import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.services";
import {Game} from "../interfaces/game.interface";

@Component({
  selector: 'app-games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  selectedGame: Game | undefined;
  showModal: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGames().subscribe(
      (response: any) => {
        this.games = response;
      },
      (error: any) => {
        console.error('Failed to fetch games:', error)
      }
    )
  }

  openModal(game: Game) {
    this.selectedGame = game;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
