import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private host = 'http://localhost:8026';
  private getFilmsURL;
  constructor(private http: HttpClient) {
    this.getFilmsURL = `${this.host}/film`;
    // this.getBookByIdURL = `${this.host}/book`;
    // this.addBookToTBRURL = `${this.host}/book`;
    // this.removeBookFromTBRURL = `${this.host}/book`;
  }

  getAllFilms(): Observable<Film[]> {
    console.log(this.getFilmsURL)
    return this.http.get<Film[]>(this.getFilmsURL);
  }
}
