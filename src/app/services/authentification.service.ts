
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPlateforme } from '../interface/admin-plateforme';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

// URL de monAPI
  private adminplateforme = 'http://localhost:3000/authentification/adminplateforme';  
  private loginnn=  'http://localhost:3000/authentification';

  private nom: string = '';
  private userId:number =0;

  constructor(private http: HttpClient,private cookieService: CookieService) {
    this.nom = this.cookieService.get('nom');
    // jai utiliser + pour convertir la chaîne en nombre
    this.userId = parseInt(this.cookieService.get('userId') || '0');   }
   getUsername(): string {
    return this.nom;
  }
  getUserId(): number {
    return this.userId;
 }
 

  
  setUserId(userId: number):void{
    this.userId =userId;
    this.cookieService.set('userId', userId.toString());

  }


  setUsername(nom: string): void {
    this.nom = nom;
    this.cookieService.set('nom', nom);
  }
  /*login(username: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.loginy}`, { username, password, role });
  }*/

  loginn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.loginnn}/loginn/${username}/${password}`, {});
}

  


  getAllAdminPlateforme(): Observable<AdminPlateforme[]> {
    return this.http.get<AdminPlateforme[]>(this.adminplateforme);
  }
}
