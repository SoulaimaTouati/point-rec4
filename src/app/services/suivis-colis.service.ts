import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuiviColisService {

  constructor(private http: HttpClient) { }
  private suivre = 'http://localhost:3000';  // URL de mon API

  suivreColis(numeroColis: number): Observable<string> {
    return this.http.get(`${this.suivre}/colis/${numeroColis}/adresse`, { responseType: 'text' });

  }
}
