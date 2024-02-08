import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private host = 'http://localhost:8026';
  private URL;
  constructor(private http: HttpClient) {
    this.URL = `${this.host}/client`;
  }

  getAllClients(): Observable<Client[]> {
    console.log(this.URL)
    return this.http.get<Client[]>(this.URL);
  }

  addClient(client : Client): Observable<Client> {
    console.log(URL);
    return this.http.post<Client>(this.URL,client);
  }
}
