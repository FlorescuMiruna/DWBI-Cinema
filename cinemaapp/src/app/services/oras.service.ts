import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oras } from '../interfaces/oras';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrasService {

  constructor(private http: HttpClient) { 
    this.getOraseURL = `${this.host}/oras`;
  }

  private host = 'http://localhost:8026';
  private getOraseURL;

  getAllOrase(): Observable<Oras[]> {
    console.log(this.getOraseURL)
    return this.http.get<Oras[]>(this.getOraseURL);
  }
}
