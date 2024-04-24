
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPlateforme } from '../interface/admin-plateforme';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

// URL de monAPI
  private adminplateforme = 'http://localhost:3000/authentification/adminplateforme';  
  private loginy = 'http://localhost:3000/authentification/login';
  private loginnn=  'http://localhost:3000/authentification';



  constructor(private http: HttpClient) { }
  login(username: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.loginy}`, { username, password, role });
  }

  loginn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.loginnn}/loginn/${username}/${password}`, {});
  }
  


  getAllAdminPlateforme(): Observable<AdminPlateforme[]> {
    return this.http.get<AdminPlateforme[]>(this.adminplateforme);
  }
}
