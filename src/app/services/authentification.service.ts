
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPlateforme } from '../interface/admin-plateforme';
import { CookieService } from 'ngx-cookie-service';
import { AdminPointRelais } from '../interface/adminpointrelais';
import { AgentPointRelais } from '../interface/agentpointrelais';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

// URL de monAPI
  private adminplateforme = 'http://localhost:3000/authentification/adminplateforme';
  private url = 'http://localhost:3000/adminplateforme';
  private url1 = 'http://localhost:3000/adminpointrelais'
  private url2 = 'http://localhost:3000/agentpointsrelais'


  private loginnn=  'http://localhost:3000/authentification';

  private nom: string = '';
  private userId:number =0;
  private prenom: string ='';
private phone:number =0;
private password:string='';
private email:string='';

  constructor(private http: HttpClient,private cookieService: CookieService) {
    this.nom = this.cookieService.get('nom');
    this.prenom=this.cookieService.get('prenom');
    this.email=this.cookieService.get('email');
    this.password=this.cookieService.get('password');
    this.phone=parseInt(this.cookieService.get('phone')||'0');
    // jai utiliser + pour convertir la chaîne en nombre
    this.userId = parseInt(this.cookieService.get('userId') || '0');   }
    //pour l'utiliser en utilisant  le cookies

   getUsername(): string {
    return this.nom;
  }
  getEmail(): string{
    return this.email;
  }
    //pour l'utiliser en utilisant  le cookies

  getUserId(): number {
    return this.userId;
 }
 getPrenom():string{
  return this.prenom;
 }
 getPhone():number{
  return this.phone;
 }
 getPassword():string{
  return this.password;
 }
 

    //pour l'utiliser en utilisant  le cookies

  setUserId(userId: number):void{
    this.userId =userId;
    this.cookieService.set('userId', userId.toString());

  }
  setPhone(phone: number):void{
    this.phone =phone;
    this.cookieService.set('phone', phone.toString());

  }

    //pour l'utiliser en utilisant  le cookies
    setUsername(nom: string): void {
    this.nom = nom;
    this.cookieService.set('nom', nom);
  }
  setPrenom(prenom:string):void{
    this.prenom =prenom;
    this.cookieService.set('prenom', prenom);

  }
  setEmail(email:string):void{
    this.email =email;
    this.cookieService.set('email', email);
  }
  setPassword(password:string):void{
    this.password =password;
    this.cookieService.set('password', password);

  }
  


  loginn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.loginnn}/loginn/${username}/${password}`, {});
}

getAdminPlateformeByNom(nom: string): Observable<AdminPlateforme> {
  return this.http.get<AdminPlateforme>(`${this.url}/${nom}`);
}
getAdminPointrelaisByNom(nom: string): Observable<AdminPointRelais> {
  return this.http.get<AdminPointRelais>(`${this.url1}/${nom}`);
}
getAgentPointrelaisByNom(nom: string): Observable<AgentPointRelais> {
  return this.http.get<AgentPointRelais>(`${this.url2}/${nom}`);
}
  getAllAdminPlateforme(): Observable<AdminPlateforme[]> {
    return this.http.get<AdminPlateforme[]>(this.adminplateforme);
  }
  
}
