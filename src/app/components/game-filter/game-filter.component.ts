import { Component, EventEmitter, Output, Input } from '@angular/core';
import { GameFilter } from "../../interfaces/game-filter.interface";

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent {
  @Output() filterApplied: EventEmitter<GameFilter> = new EventEmitter<GameFilter>();

  @Input() genres: string[] = [];
  @Input() platforms: string[] = [];

  nameFilter: string = '';
  genreFilter: string = '';
  platformFilter: string = '';

  applyFilters(): void {
    const filters: GameFilter = {
      name: this.nameFilter,
      genre: this.genreFilter,
      platform: this.platformFilter
    };

    this.filterApplied.emit(filters);
  }
}
