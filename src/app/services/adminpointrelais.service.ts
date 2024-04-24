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
  private apiUrl = 'http://localhost:3000/adminpointrelais'; // URL de votre API NestJS pour les administrateurs de point relais
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


}
