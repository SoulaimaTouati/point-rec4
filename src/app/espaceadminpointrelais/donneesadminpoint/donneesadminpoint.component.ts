import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../services/authentification.service';
import { AdminPointRelais } from '../../interface/adminpointrelais';

@Component({
  selector: 'app-donneesadminpoint',
  templateUrl: './donneesadminpoint.component.html',
  styleUrl: './donneesadminpoint.component.css'
})
export class DonneesadminpointComponent {
  constructor(private aprsidebar:AprsidebarService,private cookieService:CookieService,
    private authService:AuthentificationService){}
    adminpointrelais: AdminPointRelais|undefined ;
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
   this.authService.getAdminPointrelaisByNom(nom).subscribe(
     (adminpointrelais: AdminPointRelais) => {
       this.adminpointrelais = adminpointrelais;
       console.log(this.adminpointrelais); // Affichez les données récupérées dans la console
       this.prenom = this.adminpointrelais.prenom; 
       this.email = this.adminpointrelais.email; 
       this.phone = this.adminpointrelais.numerotelephone; 
       this.userId = this.adminpointrelais.idadminpointrelais; 
       this.password = this.adminpointrelais.motdepasse; 

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
