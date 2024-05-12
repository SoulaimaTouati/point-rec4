import { Component, OnInit } from '@angular/core';
import { AprsidebarComponent } from '../aprsidebar/aprsidebar.component';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificationService } from '../../services/authentification.service';
import { PointRelais } from '../../interface/pointrelais';
import { PointrelaisService } from '../../services/pointrelais.service';

@Component({
  selector: 'app-pointrelaisadmin',
  templateUrl: './pointrelaisadmin.component.html',
  styleUrl: './pointrelaisadmin.component.css'
})
export class PointrelaisadminComponent implements OnInit {
  isOpen: boolean = true;
  constructor(private aprsidebarservice:AprsidebarService, private snackBar:MatSnackBar,
   private authService:AuthentificationService,private pointrelaisService:PointrelaisService,
  ){}
  nom: string = '';
  userId:number=0;
  numPointRelais:number=0;
    ngOnInit() {
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
    adresse:string='';
    num_telephone:number=0;
    capacite_max:number=0;
    taux_saturation:number=0;
    nom_agent:string='';
    id_pointrelais:number=0;
    idadminpointrelais:number=0;
    num_pointrelais:number=0;
    Region:string='';
    Nom:string='';
onSubmit (form:any){
const newpointrelais: PointRelais = {
  adresse: this.adresse,
  num_telephone: this.num_telephone,
  capacite_max: this.capacite_max,
  taux_saturation: this.taux_saturation,
  nom_agent: this.nom_agent,
  id_pointrelais: this.id_pointrelais,
  idadminpointrelais: this.idadminpointrelais,
  num_pointrelais:this.numPointRelais,
  Region:this.Region,
  nom:this.Nom,
};

this.pointrelaisService.ajouterPointrelais(newpointrelais).subscribe(
  (createdColis) => {
    console.log('Nouveau colis créé :', createdColis);
    // Réinitialiser le formulaire
    form.reset(); 
  },
  (error) => {
    console.error('Erreur lors de la création du colis :', error);
    // Gérer les erreurs
  }
);
}
} 
  