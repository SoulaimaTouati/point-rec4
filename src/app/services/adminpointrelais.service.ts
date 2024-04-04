import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminPointRelais } from '../interface/adminpointrelais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminPointRelaisService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getAllAdminPointRelais(): Observable<AdminPointRelais[]> {
    return this.http.get<AdminPointRelais[]>(`${this.apiUrl}/adminpointrelais`);
  }
}
