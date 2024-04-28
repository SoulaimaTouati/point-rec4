import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PointRelais } from '../../interface/pointrelais';
import { PointrelaisService } from '../../services/pointrelais.service';
import { AdminPointRelaisService } from '../../services/adminpointrelais.service';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-affecteradminpointrelais',
  templateUrl: './affecteradminpointrelais.component.html',
  styleUrl: './affecteradminpointrelais.component.css'
})
export class AffecteradminpointrelaisComponent implements OnInit {

  pointsRelaislist: PointRelais[] = [];
  selectedPointRelaisId: number = 0;
  idpointrelais:number=0; 

  constructor(private pointrelaisService: PointrelaisService,private adminpointrelaisService: AdminPointRelaisService , private aprsidebarservice:AprsidebarService){}

  @ViewChild('btnToggleForm') btnToggleForm!: ElementRef;
  afficherFormulaire: boolean = false;
  nom: string = ''; 
  prenom: string = '';
  numerotelephone:number= 0;
  idadminpointrelais:number=0;
  motdepasse:string='';
  email='';
  isOpen: boolean = true;

  ngOnInit(): void {
    this.loadPointRelais();
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  loadPointRelais() {
    this.pointrelaisService.getAllPointRelais().subscribe(pointsRelaislist => {
      this.pointsRelaislist = pointsRelaislist;
    });
  }

  toggleFormulaire(): void {
    this.afficherFormulaire = !this.afficherFormulaire;
  }
  ajouteradminpointrelais() {
    const nouvelAdmin: AdminPointRelais = {
        nom: this.nom,
        prenom: this.prenom,
        numerotelephone: this.numerotelephone,
        motdepasse: this.motdepasse,
        idadminpointrelais:this.idadminpointrelais,
        email:this.email,
    };

    this.adminpointrelaisService.ajouterAdminPointRelais(nouvelAdmin).subscribe(
        (response) => {
            console.log('Admin point relais ajouté avec succès:', response);
            this.idadminpointrelais = response.idadminpointrelais; // Mettre à jour idadminpointrelais avec l'ID généré automatiquement
            this.onUpdatePointRelais(this.selectedPointRelaisId, this.idadminpointrelais); // Appeler onUpdatePointRelais après l'ajout avec les bonnes valeurs
        },
        (error) => {
            console.error('Erreur lors de l\'ajout de l\'admin point relais:', error);
            // Gérer les erreurs, afficher un message d'erreur à l'utilisateur, etc.
        }
    );
}

  onUpdatePointRelais(idPointRelais: number, idAdminPointRelais: number) {
    this.pointrelaisService.updatePointRelais(idPointRelais, idAdminPointRelais).subscribe(
      (response) => {
        console.log('Point relais updated successfully:', response);
        // Mettre à jour l'interface utilisateur ou effectuer d'autres actions nécessaires après la mise à jour
      },
      (error) => {
        console.error('Error updating point relais:', error);
        // Gérer les erreurs, afficher un message d'erreur à l'utilisateur, etc.
      }
    );
  }

  ajouterEtMettreAJour() {
    const nouvelAdmin: AdminPointRelais = {
      nom: this.nom,
      prenom: this.prenom,
      numerotelephone: this.numerotelephone,
      idadminpointrelais: this.idadminpointrelais,
      motdepasse: this.motdepasse,
      email: this.email,
    }; 
     this.ajouteradminpointrelais();
     this.onUpdatePointRelais(this.selectedPointRelaisId, this.idadminpointrelais);

}
openSidebar() {
  this.aprsidebarservice.openSidebar();
}

}
