import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { Colis } from '../../interface/colis';
import { ColisService } from '../../services/colis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificationService } from '../../services/authentification.service';
import { PointrelaisService } from '../../services/pointrelais.service';

@Component({
  selector: 'app-ajoutercolisadelivre',
  templateUrl: './ajoutercolisadelivre.component.html',
  styleUrl: './ajoutercolisadelivre.component.css'
})
export class AjoutercolisadelivreComponent {
  isOpen: boolean = true;
constructor(private aprsidebarservice:AprsidebarService,private colisservice:ColisService, private snackBar:MatSnackBar,
 private authService:AuthentificationService,private pointRelaisService:PointrelaisService
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
 //pour récupérer le num du pointrelais selon le nom de l'agent
 this.colisservice.getPointRelaisbynomagent(this.nom).subscribe(
   (numPointRelais: number) => {
     this.numPointRelais = numPointRelais;
     console.log(numPointRelais);
   },
   (error) => {
     // Gérez les erreurs ici
   }
 );
  }
  
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
  /*
  num_Colis: bigint=0; 
  description: string=''; 
  poids: number=0; 
  nom_Expediteur: string=''; 
  nom_Destinataire: string=''; 
  numPointRelaisDestinataire: number=0; 
  dateExpedition: Date=0; 
  dateLivraison	: Date=0; 
  etatColis : string='';
  adresse : string='';
  id_Colis : number='';
  ajoutercolis() {
    const nouvelColis: Colis = {
        num_Colis: this.num_Colis,
        description: this.description,
        poids: this.poids,
        nom_Expediteur: this.nom_Expediteur,
        nom_Destinataire:this.nom_Destinataire,
        numPointRelaisDestinataire:this.numPointRelaisDestinataire,
        dateExpedition:this.dateExpedition,
        dateLivraison:this.dateLivraison,
        etatColis: this.etatColis,
        adresse:this.adresse,
    };

    this.colisservice.ajouterColis(nouvelColis).subscribe(
        (response) => {
            //console.log('Admin plateformes ajouté avec succès:', response);
            this.snackBar.open('administrateur ajouter avec succées', 'Fermer', {
              duration: 3000 

          });
          //je vais réinitialiser les chaps a null,pour que le formulaire sera vide apres qu l'ajout s'accompli
          num_Colis: BigInt=0; 
          description: string=''; 
          poids: number=0; 
          nom_Expediteur: string=''; 
          nom_Destinataire: string=''; 
          numPointRelaisDestinataire: number=0; 
          dateExpedition: Date=0; 
          dateLivraison	: Date=0; 
          etatColis : string='';
          adresse : string='';
          id_Colis : number='';
        },
        (error) => {
            console.error('Erreur lors de l\'ajout de l\'admin plateforme:', error);
        }
    );
}*/
num_Colis:number=0;
dateLivraison:Date=new Date();
description:string='';
poids:number=0;
nom_Expediteur:string='';
nom_Destinataire:string='';
numPointRelaisDestinataire:number=this.numPointRelais;
dateExpedition:Date=new Date();
etatColis:string='en attente';
adresse:string='ddd';
id_Colis:number=0;
onSubmit (form:any){
const newColis: Colis = {
  num_Colis: this.num_Colis,
  description: this.description,
  poids: this.poids,
  nom_Expediteur: this.nom_Expediteur,
  nom_Destinataire: this.nom_Destinataire,
  numPointRelaisDestinataire: this.numPointRelais,
  dateExpedition: this.dateExpedition,
  dateLivraison:this.dateLivraison, // Date de livraison actuelle 
  etatColis: this.etatColis,
  adresse: this.adresse,
  id_Colis: this.id_Colis, // L'ID du colis est auto-incrémenté côté serveur
};

this.colisservice.ajouterColis(newColis).subscribe(
  (createdColis) => {
    console.log('Nouveau colis créé :', createdColis);
    // Réinitialiser le formulaire
    form.reset(); 
    this.changerSaturation(this.numPointRelais);

  },
  (error) => {
    console.error('Erreur lors de la création du colis :', error);
    // Gérer les erreurs
  }
);
}
changerSaturation(id: number): void {
  this.pointRelaisService.changesaturation(id).subscribe(
    () => {
      console.log('Saturation changée avec succès.');
      // Effectuez les actions supplémentaires si nécessaire après avoir changé la saturation.
    },
    error => {
      console.error('Erreur lors du changement de saturation :', error);
      // Gérez les erreurs ici.
    }
  );
}
}
