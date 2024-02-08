import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oras } from '../interfaces/oras';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrasService {


  private host = 'http://localhost:8026';
  private URL;

  constructor(private http: HttpClient) {
    this.URL = `${this.host}/oras`;
  }


  getAllOrase(): Observable<Oras[]> {
    console.log(this.URL)
    return this.http.get<Oras[]>(this.URL);
  }
}
