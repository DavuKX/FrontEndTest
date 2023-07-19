import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.services";
import {GameDetails} from "../../interfaces/game-details.interface";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  // @ts-ignore
  game: GameDetails;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gameId = Number(params.get('id'));
      this.apiService.getGameDetails(gameId).subscribe(
        (response: GameDetails) => {
          this.game = response;
        },
        (error: any) => {
          console.error('Failed to fetch game details:', error);
        }
      )
    })
  }

}
