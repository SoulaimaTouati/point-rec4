import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../services/authentification.service';
import { AdminPlateforme } from '../../interface/admin-plateforme';

@Component({
  selector: 'app-donneespersonnellesconsulter',
  templateUrl: './donneespersonnellesconsulter.component.html',
  styleUrl: './donneespersonnellesconsulter.component.css'
})
export class DonneespersonnellesconsulterComponent implements OnInit {
  constructor(private aprsidebar:AprsidebarService,private cookieService:CookieService,
     private authService:AuthentificationService){}
     adminPlateforme: AdminPlateforme|undefined ;
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
    this.authService.getAdminPlateformeByNom(nom).subscribe(
      (adminPlateforme: AdminPlateforme) => {
        this.adminPlateforme = adminPlateforme;
        console.log(this.adminPlateforme); // Affichez les données récupérées dans la console
        this.prenom = this.adminPlateforme.prenom; 
        this.email = this.adminPlateforme.email; 
        this.phone = this.adminPlateforme.numerotelephone; 
        this.userId = this.adminPlateforme.idadminplateforme; 
        this.password = this.adminPlateforme.motdepasse; 

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
