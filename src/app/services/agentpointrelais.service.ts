import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgentPointRelais } from '../interface/agentpointrelais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentpointrelaisService {

  private url = 'http://localhost:3000/agentpointsrelais'; 

  constructor(private http: HttpClient) {} 
  
  modifierAgent(agentmodifie: AgentPointRelais): Observable<any> {

    const url = `${this.url}/${agentmodifie.nom}`;
    return this.http.put<any>(url, agentmodifie);
  }
}

