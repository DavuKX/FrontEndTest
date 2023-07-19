import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardComponent } from './game-card.component';
import { By } from '@angular/platform-browser';
import { TruncatePipe} from "../../pipes/truncate/truncate.pipe";
import { Game } from '../../interfaces/game.interface';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;
  const mockGame: Game = {
    id: 1,
    title: 'Test Game',
    thumbnail: 'https://example.com/test-game-thumbnail.jpg',
    short_description: 'This is a test game',
    genre: 'Action',
    platform: 'PC',
    developer: 'Test Developer',
    publisher: 'Test Publisher',
    release_date: '2023-01-01',
    freetogame_profile_url: 'https://example.com/test-game-profile',
    game_url: 'https://example.com/test-game',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardComponent, TruncatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.game = mockGame;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the game information correctly', () => {
    const gameTitleElement = fixture.debugElement.query(By.css('.card-title'));
    const gameThumbnailElement = fixture.debugElement.query(By.css('.card-img-top'));

    expect(gameTitleElement).toBeTruthy(); // Check if the element exists
    expect(gameThumbnailElement).toBeTruthy(); // Check if the element exists

    if (gameTitleElement && gameThumbnailElement) {
      expect(gameTitleElement.nativeElement.textContent).toContain(mockGame.title);
      expect(gameThumbnailElement.nativeElement.src).toBe(mockGame.thumbnail);
    }
  });
});
