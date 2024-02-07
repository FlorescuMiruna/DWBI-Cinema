import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from '../interfaces/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private host = 'http://localhost:8026';
  private getCinemasURL;
  constructor(private http: HttpClient) {
    this.getCinemasURL = `${this.host}/cinema`;
    // this.getBookByIdURL = `${this.host}/book`;
    // this.addBookToTBRURL = `${this.host}/book`;
    // this.removeBookFromTBRURL = `${this.host}/book`;
  }

  getAllCinemas(): Observable<Cinema[]> {
    console.log(this.getCinemasURL)
    return this.http.get<Cinema[]>(this.getCinemasURL);
  }
}
