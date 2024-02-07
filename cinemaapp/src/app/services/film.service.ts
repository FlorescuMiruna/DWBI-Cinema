import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private host = 'http://localhost:8026';
  private URL;
  constructor(private http: HttpClient) {
    this.URL = `${this.host}/film`;
  }

  getAllFilms(): Observable<Film[]> {
    console.log(this.URL)
    return this.http.get<Film[]>(this.URL);
  }

  addFilm(film : Film): Observable<Film> {
    console.log(URL);
    return this.http.post<Film>(this.URL,film);
  }
}
