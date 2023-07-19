import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GameDetailComponent } from './game-detail.component';
import { ApiService } from '../../services/api.services';
import { GameDetails } from '../interfaces/game-details.interface';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let mockApiService: jest.Mocked<ApiService>;
  const mockGameDetails: GameDetails = {
    id: 1,
    title: 'Test Game',
    thumbnail: 'https://example.com/game-thumbnail.jpg',
    status: 'Live',
    short_description: 'A test game',
    description: 'This is a test game description',
    game_url: 'https://example.com/game',
    genre: 'Test Genre',
    platform: 'Windows',
    publisher: 'Test Publisher',
    developer: 'Test Developer',
    release_date: '2023-07-18',
    freetogame_profile_url: 'https://example.com/game-profile',
    minimum_system_requirements: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050',
      storage: '20 GB',
    },
    screenshots: [],
  };

  beforeEach(async () => {
    const mockActivatedRoute = {
      paramMap: of({
        get: jest.fn().mockReturnValue('1'), // Simulate route parameter
      }),
    };

    const mockApiServiceSpy = {
      getGameDetails: jest.fn().mockReturnValue(of(mockGameDetails)),
    };

    await TestBed.configureTestingModule({
      declarations: [GameDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ApiService, useValue: mockApiServiceSpy },
      ],
    }).compileComponents();

    mockApiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch game details and assign to `game` property', () => {
    expect(mockApiService.getGameDetails).toHaveBeenCalledWith(1);
    expect(component.game).toEqual(mockGameDetails);
    expect(component.game.title).toBe('Test Game');
    expect(component.game.short_description).toBe('A test game');
  });
});
