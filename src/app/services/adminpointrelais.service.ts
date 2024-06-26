import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminPointRelais } from '../interface/adminpointrelais';
import { Observable } from 'rxjs';
import { PointRelais } from '../interface/pointrelais';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminPointRelaisService {
  //c'est l' URL de l'api NestJS pour les administrateurs de point relais
  private apiUrl = 'http://localhost:3000/adminpointrelais'; 
  private addurl = `http://localhost:3000/adminpointrelais/creer`;

  constructor(private http: HttpClient) {}

  getAllAdminPointRelais(): Observable<AdminPointRelais[]> {
    return this.http.get<AdminPointRelais[]>(this.apiUrl);
  }

  getPointRelaisByAdminId(idadminplateforme: number): Observable<PointRelais[]> {
    const url = `${this.apiUrl}/${idadminplateforme}/pointsrelais`;
    return this.http.get<PointRelais[]>(url);
  }

  ajouterAdminPointRelais(nouvelAdmin: AdminPointRelais): Observable<any> {
    return this.http.post<any>(this.addurl, nouvelAdmin).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
  searchAdminPointRelais(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search/${query}`);
  }

  modifierAdminPointrelais(adminModifie: AdminPointRelais): Observable<any> {
    const url = `${this.apiUrl}/${adminModifie.nom}`;
    return this.http.put<any>(url, adminModifie);
  }
}
