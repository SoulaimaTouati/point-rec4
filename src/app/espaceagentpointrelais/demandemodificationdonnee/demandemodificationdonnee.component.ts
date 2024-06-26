import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../services/authentification.service';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AgentPointRelais } from '../../interface/agentpointrelais';
import { AgentpointrelaisService } from '../../services/agentpointrelais.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demandemodificationdonnee',
  templateUrl: './demandemodificationdonnee.component.html',
  styleUrl: './demandemodificationdonnee.component.css'
})
export class DemandemodificationdonneeComponent {
  constructor(private aprsidebar:AprsidebarService,private authService:AuthentificationService,
    private agentservice:AgentpointrelaisService,private snackBar:MatSnackBar,
    
  ){}

 nom:string='';
 prenom:string='';
 email:string='';
 phone:number=0;
 userId:number=0;
 password:string='';
 agent:AgentPointRelais|undefined;
  isOpen: boolean = true;
ngOnInit(): void {
    this.aprsidebar.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.nom = this.authService.getUsername();
    console.log(this.nom);
    const nom = this.nom; // Remplacez par le nom de l'administrateur souhaité
      this.authService.getAgentPointrelaisByNom(nom).subscribe(
        (agent: AgentPointRelais) => {
          this.agent = agent;
          console.log(this.agent); // Affichez les données récupérées dans la console
          this.prenom = this.agent.prenom; 
          this.phone = this.agent.numerotelephone; 
          this.userId = this.agent.idagentpointrelais; 
          this.password = this.agent.motdepasse; 
          this.nom =this.agent.nom;
  
        },
        error => {
          console.error(error); // Gérez les erreurs ici
        }
      );
  }
  openSidebar() {
    this.aprsidebar.openSidebar();
  }
  nouveauNom: string = ''; 
  nouveauPrenom: string = ''; 
  nouveauEmail: string = ''; 
  nouveauPhone: number = 0; 
 modifier(): void {
  const { nouveauNom, nouveauPrenom, nouveauEmail, nouveauPhone } = this;
  const agentmodifie: AgentPointRelais = {
    idagentpointrelais:this.userId,
    motdepasse:this.password,
    nom: nouveauNom || this.nom,
    prenom: nouveauPrenom || this.prenom,
    numerotelephone: nouveauPhone || this.phone
  };

  // Appeler le service pour envoyer les données modifiées à l'API backend
  this.agentservice.modifierAgent(agentmodifie).subscribe(
    () => {
      console.log('Données administrateur modifiées avec succès !');
      this.snackBar.open('Données administrateur modifiées avec succès !', 'Fermer', {
        duration: 3000 

    });
    //je vais réinitialiser les champs ,pour que le formulaire sera initialiser apres qu l'ajout s'accompli
    this.nouveauNom = ''; 
    this.nouveauPrenom = ''; 
    this.nouveauEmail = ''; 
    this.nouveauPhone = 0; 
      // Rafraîchir les données affichées après la modification
      this.ngOnInit();
    },
    error => {
      console.error('Erreur lors de la modification des données de l agent :', error);
    }
  );
 }}

