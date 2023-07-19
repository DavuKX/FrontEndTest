import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from "./components/games-list/game-list.component";
import { GameDetailComponent } from "./components/game-detail/game-detail.component";

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'game/:id', component: GameDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
