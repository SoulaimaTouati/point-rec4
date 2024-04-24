import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AdminPlateforme } from '../../interface/admin-plateforme';
import { AdminplateformeService } from '../../services/adminplateforme.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-addadminplateforme',
  templateUrl: './addadminplateforme.component.html',
  styleUrl: './addadminplateforme.component.css'
})
export class AddadminplateformeComponent {
  constructor(private aprsidebarservice: AprsidebarService ,private adminplateformeservice:AdminplateformeService,private snackBar:MatSnackBar){}
  nom: string = ''; 
  prenom: string = '';
  numerotelephone:number= 0;
  idadminplateforme:number=0;
  motdepasse:string='';
  email:string='';

  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }

  ajouteradminplateforme() {
    const nouvelAdmin: AdminPlateforme = {
        nom: this.nom,
        prenom: this.prenom,
        numerotelephone: this.numerotelephone,
        motdepasse: this.motdepasse,
        idadminplateforme:this.idadminplateforme,
        email:this.email,
    };

    this.adminplateformeservice.ajouterAdminPlateforme(nouvelAdmin).subscribe(
        (response) => {
            //console.log('Admin plateformes ajouté avec succès:', response);
            this.snackBar.open('administrateur ajouter avec succées', 'Fermer', {
              duration: 3000 

          });
          //je vais réinitialiser les chaps a null,pour que le formulaire sera vide apres qu l'ajout s'accompli
          this.nom = ''; 
        this.prenom = '';
        this.numerotelephone = 0;
        this.motdepasse = '';
        this.email = '';
        },
        (error) => {
            console.error('Erreur lors de l\'ajout de l\'admin plateforme:', error);
        }
    );
}
}
