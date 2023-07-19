import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameFilterComponent } from './game-filter.component';

describe('GameFilterComponent', () => {
  let component: GameFilterComponent;
  let fixture: ComponentFixture<GameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameFilterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterApplied event when applyFilters is called', () => {
    const mockFilters = {
      name: 'test',
      genre: 'action',
      platform: 'pc'
    };

    const emitSpy = jest.spyOn(component.filterApplied, 'emit');

    component.nameFilter = mockFilters.name;
    component.genreFilter = mockFilters.genre;
    component.platformFilter = mockFilters.platform;
    component.applyFilters();

    expect(emitSpy).toHaveBeenCalledWith(mockFilters);
  });

  it('should have the genres and platforms populated correctly', () => {
    const mockGenres = ['Action', 'Adventure', 'Rpg'];
    const mockPlatforms = ['Pc', 'Playstation', 'Xbox'];

    component.genres = mockGenres;
    component.platforms = mockPlatforms;

    fixture.detectChanges();

    const genreSelectOptions = fixture.nativeElement.querySelectorAll('#genreFilter option');
    const platformSelectOptions = fixture.nativeElement.querySelectorAll('#platformFilter option');

    expect(genreSelectOptions.length).toBe(mockGenres.length + 1); // +1 for the "All" option
    expect(platformSelectOptions.length).toBe(mockPlatforms.length + 1); // +1 for the "All" option

    mockGenres.forEach((genre, index) => {
      expect(genreSelectOptions[index + 1].textContent.trim()).toBe(genre);
    });

    mockPlatforms.forEach((platform, index) => {
      expect(platformSelectOptions[index + 1].textContent.trim()).toBe(platform);
    });
  });
});
