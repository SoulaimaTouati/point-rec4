import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AdminPointRelaisService } from '../../services/adminpointrelais.service';
import { PointRelais } from '../../interface/pointrelais';

@Component({
  selector: 'app-adminpointrelais',
  templateUrl: './adminpointrelais.component.html',
  styleUrls: ['./adminpointrelais.component.css']
})
export class AdminpointrelaisComponent implements OnInit {
  adminPointRelaisList: AdminPointRelais[] = [];
  pointsRelais: PointRelais[] = [];
  afficherPointsRelais: boolean = false;
  admin: AdminPointRelais | null = null; // Déclarer la propriété admin
  name='';
  lastname='';
  searchQuery: string = '';


  constructor(private adminPointRelaisService: AdminPointRelaisService) {}
  
  ngOnInit(): void {
    this.loadAdminPointRelais();
  }


  

  loadAdminPointRelais(): void {
    this.adminPointRelaisService.getAllAdminPointRelais().subscribe(
      (data) => {
        this.adminPointRelaisList = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des adminpointrelais :', error);
      }
    );
  }



  /*countRows(name: string): number {
    return this.adminPointRelaisList.filter(admin => admin.nom === name).length;
  

  countPrenomRows(nom: string, prenom: string): number {
    let count = 1;
    for (let i = 1; i < this.adminPointRelaisList.length; i++) {
      if (this.adminPointRelaisList[i].nom === nom && this.adminPointRelaisList[i].prenom === prenom) {
        count++;
      }
    }
    return count;
  }
  
  countTelephoneRows(nom: string, prenom: string, telephone: string): number {
    let count = 0;
    for (let i = 0; i < this.adminPointRelaisList.length; i++) {
      if (this.adminPointRelaisList[i].nom === nom && this.adminPointRelaisList[i].prenom === prenom &&
          this.adminPointRelaisList[i].numerotelephone === telephone) {
        count++;
      }
    }
    return count;
  }*/
  

  @ViewChild('btnToggleForm') btnToggleForm!: ElementRef;
  afficherFormulaire: boolean = false;
  nom: string = ''; 
  prenom: string = '';
  idadminpointrelais:number= 0;
  numerotelephone:number= 0;
  motdepasse:string='';


  toggleFormulaire(): void {
    this.afficherFormulaire = !this.afficherFormulaire;
 
  }

  ajouterResponsable(): void {
    // cest pour ajouter le responsable //la logique
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
  }

  consulterPointsRelais(idadminpointrelais: number): void {
    this.adminPointRelaisService.getPointRelaisByAdminId(idadminpointrelais).subscribe(
      (data: PointRelais[]) => {
        console.log('Points relais associés à l\'ID de l\'admin:', data);
        this.pointsRelais = data;
        this.afficherPointsRelais = true;
          const admin = this.adminPointRelaisList.find(admin => admin.idadminpointrelais === idadminpointrelais);
        if (admin) {
          console.log('Liste des points relais associés à l\'administrateur :', admin.nom , admin.prenom);
          this.name=admin.nom;
          this.lastname=admin.prenom
        }
  
        // Traitez les données des points relais ici, par exemple, les afficher dans votre template HTML
      },
      (error) => {
        console.log('Erreur lors de la récupération des points relais associés à l\'ID de l\'admin :', error);
      }
    );
    console.log('ID de l\'admin point relais:', idadminpointrelais);
    // Vous pouvez appeler une méthode du service pour récupérer les points relais associés à cet ID ici
  }


  search(): void {
    if (this.searchQuery.trim() !== '') {
      this.adminPointRelaisService.searchAdminPointRelais(this.searchQuery).subscribe(
        (response) => {
          this.adminPointRelaisList = response;
        },
        (error) => {
          console.error('Erreur lors de la recherche :', error);
          // Gérez l'erreur ici, par exemple en affichant un message à l'utilisateur
        }
      );
    } else {
      // Si la requête de recherche est vide, réinitialisez la liste des administrateurs
      this.adminPointRelaisList = [];
    }
  }
  
}