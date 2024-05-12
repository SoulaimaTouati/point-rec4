import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PointRelais } from '../interface/pointrelais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointrelaisService {

  private apiUrl = 'http://localhost:3000/pointrelais'; 
  private baseUrl  = 'http://localhost:3000/pointrelais'; 
  constructor(private http: HttpClient) {}

 
  getAllPointRelais(): Observable<PointRelais[]> {
    return this.http.get<PointRelais[]>(`${this.apiUrl}/list`);
  }
  

  updatePointRelais(idPointRelais: number, idAdminPointRelais: number) {
    const url = `http://localhost:3000/adminpointrelais/update/${idPointRelais}/${idAdminPointRelais}`;
    return this.http.put(url, {});
  }
  ajouterPointrelais(newpointrelais: PointRelais): Observable<PointRelais> {
    return this.http.post<PointRelais>(`${this.apiUrl}/creer`, newpointrelais);
  }
  getNumberOfPointRelais(region: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${region}/count`);
  }
    changesaturation(num: number): Observable<any> {
      return this.http.post(`${this.baseUrl}/${num}/tauxsaturation`, {});
    }
  }
  




