import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './components/cinema/cinema.component';
import { CinemaFormComponent } from './components/cinema-form/cinema-form.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
  { path: 'cinema', component: CinemaComponent },
  { path: 'add-cinema', component: CinemaFormComponent },
  { path: 'film', component: FilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
