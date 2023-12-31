import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/games-list/game-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { GameCardComponent } from './components/game-card/game-card.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameFilterComponent } from './components/game-filter/game-filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    TruncatePipe,
    GameDetailComponent,
    GameFilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
