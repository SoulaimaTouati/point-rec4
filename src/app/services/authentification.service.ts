
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPlateforme } from '../interface/admin-plateforme';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  private adminplateforme = 'http://localhost:3000/authentification/adminplateforme';  // URL de monAPI
  private loginy = 'http://localhost:3000/authentification/login';  // URL de monAPI



  constructor(private http: HttpClient) { }
  login(username: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.loginy}`, { username, password, role });
  }


  getAllAdminPlateforme(): Observable<AdminPlateforme[]> {
    return this.http.get<AdminPlateforme[]>(this.adminplateforme);
  }
}
