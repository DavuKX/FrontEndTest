import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameListComponent } from './game-list.component';
import { ApiService } from '../../services/api.services';
import { of } from 'rxjs';
import { Game } from '../interfaces/game.interface';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let mockApiService: jest.Mocked<ApiService>;
  const mockGames: Game[] = [
    {
      id: 1,
      title: 'Game 1',
      thumbnail: 'https://example.com/game1-thumbnail.jpg',
      short_description: 'Description of Game 1',
      genre: 'Action',
      platform: 'PC',
      publisher: 'Publisher 1',
      developer: 'Developer 1',
      release_date: '2023-01-01',
      freetogame_profile_url: 'https://example.com/game1-profile',
      game_url: 'https://example.com/game1',
    },
    {
      id: 2,
      title: 'Game 2',
      thumbnail: 'https://example.com/game2-thumbnail.jpg',
      short_description: 'Description of Game 2',
      genre: 'RPG',
      platform: 'Console',
      publisher: 'Publisher 2',
      developer: 'Developer 2',
      release_date: '2023-02-01',
      freetogame_profile_url: 'https://example.com/game2-profile',
      game_url: 'https://example.com/game2',
    },
  ];

  beforeEach(async () => {
    const mockApiServiceSpy = {
      getGames: jest.fn().mockReturnValue(of(mockGames)),
    };

    await TestBed.configureTestingModule({
      declarations: [GameListComponent],
      providers: [{ provide: ApiService, useValue: mockApiServiceSpy }],
    }).compileComponents();

    mockApiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch games and assign to `games` property', () => {
    expect(mockApiService.getGames).toHaveBeenCalled();
    expect(component.games).toEqual(mockGames);
    expect(component.games.length).toBe(2);
  });
});
