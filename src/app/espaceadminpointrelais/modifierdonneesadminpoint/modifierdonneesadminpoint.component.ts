import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AuthentificationService } from '../../services/authentification.service';
import { AdminplateformeService } from '../../services/adminplateforme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AdminPointRelaisService } from '../../services/adminpointrelais.service';

@Component({
  selector: 'app-modifierdonneesadminpoint',
  templateUrl: './modifierdonneesadminpoint.component.html',
  styleUrl: './modifierdonneesadminpoint.component.css'
})
export class ModifierdonneesadminpointComponent {
  constructor(private aprsidebar:AprsidebarService,private authService:AuthentificationService,
    private adminpointrelaisservice:AdminPointRelaisService,private snackBar:MatSnackBar,
    
  ){}

 nom:string='';
 prenom:string='';
 email:string='';
 phone:number=0;
 userId:number=0;
 password:string='';
 adminPointrelais:AdminPointRelais|undefined;
  isOpen: boolean = true;
ngOnInit(): void {
    this.aprsidebar.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.nom = this.authService.getUsername();
    console.log(this.nom);
    const nom = this.nom; // Remplacez par le nom de l'administrateur souhaité
      this.authService.getAdminPointrelaisByNom(nom).subscribe(
        (adminPointrelais: AdminPointRelais) => {
          this.adminPointrelais = adminPointrelais;
          console.log(this.adminPointrelais); // Affichez les données récupérées dans la console
          this.prenom = this.adminPointrelais.prenom; 
          this.email = this.adminPointrelais.email; 
          this.phone = this.adminPointrelais.numerotelephone; 
          this.userId = this.adminPointrelais.idadminpointrelais; 
          this.password = this.adminPointrelais.motdepasse; 
          this.nom =this.adminPointrelais.nom;
  
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
  const adminModifie: AdminPointRelais = {
    idadminpointrelais:this.userId,
    motdepasse:this.password,
    nom: nouveauNom || this.nom,
    prenom: nouveauPrenom || this.prenom,
    email: nouveauEmail || this.email,
    numerotelephone: nouveauPhone || this.phone
  };

  // Appeler le service pour envoyer les données modifiées à l'API backend
  this.adminpointrelaisservice.modifierAdminPointrelais(adminModifie).subscribe(
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
      console.error('Erreur lors de la modification des données administrateur :', error);
    }
  );
}

  
}
