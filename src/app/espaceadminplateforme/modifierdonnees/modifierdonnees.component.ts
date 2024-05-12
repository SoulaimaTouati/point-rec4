import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AuthentificationService } from '../../services/authentification.service';
import { AdminPlateforme } from '../../interface/admin-plateforme';
import { AdminplateformeService } from '../../services/adminplateforme.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifierdonnees',
  templateUrl: './modifierdonnees.component.html',
  styleUrl: './modifierdonnees.component.css'
})
export class ModifierdonneesComponent {
  constructor(private aprsidebar:AprsidebarService,private authService:AuthentificationService,
    private adminservice:AdminplateformeService,private snackBar:MatSnackBar,
    
  ){}

 nom:string='';
 prenom:string='';
 email:string='';
 phone:number=0;
 userId:number=0;
 password:string='';
 adminPlateforme:AdminPlateforme|undefined;
  isOpen: boolean = true;
ngOnInit(): void {
    this.aprsidebar.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.nom = this.authService.getUsername();
    console.log(this.nom);
    const nom = this.nom; // Remplacez par le nom de l'administrateur souhaité
      this.authService.getAdminPlateformeByNom(nom).subscribe(
        (adminPlateforme: AdminPlateforme) => {
          this.adminPlateforme = adminPlateforme;
          console.log(this.adminPlateforme); // Affichez les données récupérées dans la console
          this.prenom = this.adminPlateforme.prenom; 
          this.email = this.adminPlateforme.email; 
          this.phone = this.adminPlateforme.numerotelephone; 
          this.userId = this.adminPlateforme.idadminplateforme; 
          this.password = this.adminPlateforme.motdepasse; 
          this.nom =this.adminPlateforme.nom;
  
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
  const adminModifie: AdminPlateforme = {
    idadminplateforme:this.userId,
    motdepasse:this.password,
    nom: nouveauNom || this.nom,
    prenom: nouveauPrenom || this.prenom,
    email: nouveauEmail || this.email,
    numerotelephone: nouveauPhone || this.phone
  };

  // Appeler le service pour envoyer les données modifiées à l'API backend
  this.adminservice.modifierAdminPlateforme(adminModifie).subscribe(
    () => {
      console.log('Données administrateur modifiées avec succès !');
      this.snackBar.open('administrateur ajouter avec succées', 'Fermer', {
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
