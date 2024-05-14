import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AuthentificationService } from '../../services/authentification.service';
import { ColisService } from '../../services/colis.service';
import { AgentPointRelais } from '../../interface/agentpointrelais';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-consulterdonneepersonnel',
  templateUrl: './consulterdonneepersonnel.component.html',
  styleUrl: './consulterdonneepersonnel.component.css'
})
export class ConsulterdonneepersonnelComponent implements OnInit {
  constructor(private aprsidebar:AprsidebarService,private cookieService:CookieService,
    private authService:AuthentificationService){}
    agentpointrelais: AgentPointRelais|undefined ;
  phone:number =0;
  password:string='';
 email:string='';
 nom: string = '';
 userId:number=0;
 prenom:string='';
 isOpen: boolean = true;
ngOnInit(): void {
   this.aprsidebar.isOpen$.subscribe(isOpen => {
     this.isOpen = isOpen;
   });
 // Enfin, récupérez le nom de l'utilisateur
 this.nom = this.authService.getUsername();
 console.log(this.nom);
 const nom = this.nom; // Remplacez par le nom de l'administrateur souhaité
   this.authService.getAgentPointrelaisByNom(nom).subscribe(
     (agentpointrelais: AgentPointRelais) => {
       this.agentpointrelais = agentpointrelais;
       console.log(this.agentpointrelais); // Affichez les données récupérées dans la console
       this.prenom = this.agentpointrelais.prenom; 
      // this.email = this.agentpointrelais.email; 
       this.phone = this.agentpointrelais.numerotelephone; 
       this.userId = this.agentpointrelais.idagentpointrelais; 
       this.password = this.agentpointrelais.motdepasse; 

     },
     error => {
       console.error(error); // Gérez les erreurs ici
     }
   );
 }
         
 openSidebar() {
   this.aprsidebar.openSidebar();
 }
 
 


}