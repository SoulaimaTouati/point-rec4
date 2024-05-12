import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminPlateforme } from '../interface/admin-plateforme';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminplateformeService {
  private addurl = `http://localhost:3000/adminplateforme/creer`;
  private url = `http://localhost:3000/adminplateforme`;

  constructor(private http: HttpClient) {}

  ajouterAdminPlateforme(nouvelAdmin: AdminPlateforme): Observable<any> {
    return this.http.post<any>(this.addurl, nouvelAdmin).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
  modifierAdminPlateforme(adminModifie: AdminPlateforme): Observable<any> {
    const url = `${this.url}/${adminModifie.nom}`;
    return this.http.put<any>(url, adminModifie);
  }
}
