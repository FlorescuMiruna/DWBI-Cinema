import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from '../interfaces/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private host = 'http://localhost:8026';
  private URL;
  constructor(private http: HttpClient) {
    this.URL = `${this.host}/cinema`;
    // this.getBookByIdURL = `${this.host}/book`;
    // this.addBookToTBRURL = `${this.host}/book`;
    // this.removeBookFromTBRURL = `${this.host}/book`;
  }

  getAllCinemas(): Observable<Cinema[]> {

    return this.http.get<Cinema[]>(this.URL);
  }

  // addCinema(): Observable<Cinema[]> {

  //   return this.http.get<Cinema[]>(this.URL);
  // }

  addCinema(cinema : Cinema, id: number): Observable<Cinema> {
    this.URL = this.URL + '/oras/' + id;
    return this.http.post<Cinema>(this.URL,cinema);
  }
}
