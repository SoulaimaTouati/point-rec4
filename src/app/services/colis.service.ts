import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colis } from '../interface/colis';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColisService {
  private apiUrl = 'http://localhost:3000/colis'; 
  private apiUrl1= 'http://localhost:3000/pointrelais'; 


  constructor(private http: HttpClient) { }
  getColisbyNumPoint(num_pointrelais: number): Observable<Colis[]> {
    const url = `${this.apiUrl}/${num_pointrelais}/colis`;
    return this.http.get<Colis[]>(url);
  }
  getAllColis(): Observable<Colis[]> {
    return this.http.get<Colis[]>(`${this.apiUrl}/coliss`);
  }
  

 getPointRelaisbynomagent(nomag: string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl1}/${nomag}`);
}
markColisDelivered(numColis: string): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${numColis}/délivré`, {});
}
markColisEnRetour(numColis: string): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${numColis}/en retour`, {});
}


ajouterColis(newColis: Colis): Observable<Colis> {
  return this.http.post<Colis>(`${this.apiUrl}/creer`, newColis);
}
getColisByState(): Observable<{ state: string; count: number }[]> {
  return this.http.get<{ state: string; count: number }[]>(`${this.apiUrl}/etat`);
}

}
