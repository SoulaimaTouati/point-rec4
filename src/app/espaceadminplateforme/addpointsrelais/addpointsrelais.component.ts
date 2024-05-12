  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { PointRelais } from '../../interface/pointrelais';
  import { PointrelaisService } from '../../services/pointrelais.service';
  import { AdminPointRelaisService } from '../../services/adminpointrelais.service';
  import { AprsidebarService } from '../../services/aprsidebar.service';
  import { AdminPointRelais } from '../../interface/adminpointrelais';
import { MatSnackBar } from '@angular/material/snack-bar';

  @Component({
    selector: 'app-addpointsrelais',
    templateUrl: './addpointsrelais.component.html',
    styleUrl: './addpointsrelais.component.css'
  })
  export class AddpointsrelaisComponent implements OnInit {
    Region= ['Tunis 1','Tunis 2','Sfax et Sud','Sousse centre et Sahel'] ;
    selectedadminPointRelaisId: number = 0;
    selectedPointRelaisId: number = 0;
    idpointrelais:number=0; 
    adminpointrelaislist:AdminPointRelais[] =[];
    selectedRegion:string='';

    constructor(private pointrelaisService: PointrelaisService,private snackBar:MatSnackBar ,
      private adminpointrelaisService: AdminPointRelaisService , private aprsidebarservice:AprsidebarService){}

    @ViewChild('btnToggleForm') btnToggleForm!: ElementRef;
    afficherFormulaire: boolean = false;
    nom: string = ''; 
    prenom: string = '';
    numerotelephone:number= 0;
    idadminpointrelais:number=0;
    tauxsaturation:number=0;
    capacitemax:number=0;
    adresse='';
    isOpen: boolean = true;

    ngOnInit(): void {
      this.aprsidebarservice.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
      });
      this.loadadminpointsrelais();
     
    }
    
    loadadminpointsrelais(){
      this.adminpointrelaisService.getAllAdminPointRelais().subscribe(adminpointrelaislist=> {
        this.adminpointrelaislist = adminpointrelaislist ;
      })
    }

    ajouterPointRelais() {
      const newPointRelais: PointRelais = {
        nom: this.nom,
        idadminpointrelais: this.selectedadminPointRelaisId,
        num_telephone: this.numerotelephone,
        capacite_max: this.capacitemax,
        taux_saturation: this.tauxsaturation,
        adresse: this.adresse,
        Region: this.selectedRegion,
        nom_agent: '', // Remplir les valeurs manquantes selon vos besoins
        id_pointrelais: 0, // Remplir les valeurs manquantes selon vos besoins
        num_pointrelais:0,
      };
  
      this.pointrelaisService.ajouterPointrelais(newPointRelais).subscribe(
        (response) => {
          this.snackBar.open('Points relais ajouter avec succées', 'Fermer', {
            duration: 3000 ,
            panelClass: ['custom-snackbar']
});
          console.log('Point relais ajouté avec succès:', response);
          // Mettre à jour l'interface utilisateur si nécessaire
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du point relais:', error);
          // Gérer les erreurs si nécessaire
        }
      );
    }

  

    onUpdatePointRelais(idPointRelais: number, idAdminPointRelais: number) {
      this.pointrelaisService.updatePointRelais(idPointRelais, idAdminPointRelais).subscribe(
        (response) => {
          console.log('Point relais updated successfully:', response);
          // Mettre à jour l'interface utilisateur 
        },
        (error) => {
          console.error('Error updating point relais:', error);
          // Gérer les erreurs
        }
      );
    }

    
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }

  }
