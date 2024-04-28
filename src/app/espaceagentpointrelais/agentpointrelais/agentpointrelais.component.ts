import { Component } from '@angular/core';
import { AprsidebarComponent } from '../../espaceadminpointrelais/aprsidebar/aprsidebar.component';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-agentpointrelais',
  templateUrl: './agentpointrelais.component.html',
  styleUrl: './agentpointrelais.component.css'
})
export class AgentpointrelaisComponent {
photoadresse:string="assets/photos/adressecolis.png";
photodelivre:string="assets/photos/7245051-removebg-preview.png";
  constructor(private aprsidebarservice:AprsidebarService, private cookieService: CookieService,private authService:AuthentificationService ){}
  isOpen: boolean = true;
  numcolis:number=0;
  //cette variable pour le stocker depuis le cookies de login
  nom: string = '';
  userId:number=0;
  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    // c'est pour Récupérer le nom de l'utilisateur depuis le cookie lors de l'initialisation du composant
    this.nom = this.authService.getUsername();
    this.userId = this.authService.getUserId();
  }

openSidebar() {
  this.aprsidebarservice.openSidebar();
}

}