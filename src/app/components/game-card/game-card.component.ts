import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  // @ts-ignore
  @Input() game: Game;
}
