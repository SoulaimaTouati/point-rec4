import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AdminPointRelaisService } from '../../services/adminpointrelais.service';
import { PointRelais } from '../../interface/pointrelais';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { sortBy } from 'lodash';
import { Router } from '@angular/router';

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


  constructor(private adminPointRelaisService: AdminPointRelaisService , private aprsidebarservice:AprsidebarService ,private router:Router) {}
  
  ngOnInit(): void {
    this.loadAdminPointRelais();
  }

  sortByName(): void {
    // Utilisez la fonction `sort` de lodash pour trier les administrateurs par nom
    this.adminPointRelaisList = sortBy(this.adminPointRelaisList, ['nom']);
  }

  // Méthode de tri pour le prénom
  sortByFirstname(): void {
    // Utilisez la fonction `sort` de lodash pour trier les administrateurs par prénom
    this.adminPointRelaisList = sortBy(this.adminPointRelaisList, ['prenom']);
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
  

  @ViewChild('btnToggleForm') btnToggleForm!: ElementRef;
  afficherFormulaire: boolean = false;
  nom: string = ''; 
  prenom: string = '';
  idadminpointrelais:number= 0;
  numerotelephone:number= 0;
  motdepasse:string='';
  showSortDropdown: boolean = false;

  toggleSortDropdown(): void {
    this.showSortDropdown = !this.showSortDropdown;
  }
  
  onSortChange(event: any): void {
    const sortBy = event.value;
    if (sortBy === 'nom') {
      this.sortByName();
    } else if (sortBy === 'prenom') {
      this.sortByFirstname();
    }
  }

  toggleFormulaire(): void {
    this.afficherFormulaire = !this.afficherFormulaire;
 
  }

  ajouterResponsable(): void {
    // cest pour ajouter le responsable //la logique
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
  }
/*
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
  }*/


consulterPointsRelais(idadminpointrelais: number): void {
    this.adminPointRelaisService.getPointRelaisByAdminId(idadminpointrelais).subscribe(
      (data: PointRelais[]) => {
        console.log('Points relais associés à l\'ID de l\'admin:', data);
        const admin = this.adminPointRelaisList.find(admin => admin.idadminpointrelais === idadminpointrelais);
        if (admin) {
          console.log('Liste des points relais associés à l\'administrateur :', admin.nom , admin.prenom);
          this.name=admin.nom;
          this.lastname=admin.prenom;
        
          this.router.navigate(['/consulter-dashboard', idadminpointrelais]);

       //this.router.navigate(['/consulter-dashboard'], { state: { pointsRelais: this.pointsRelais, name: admin.nom, lastname: admin.prenom } });
      }},
      (error) => {
        console.log('Erreur lors de la récupération des points relais associés à l\'ID de l\'admin :', error);
      }
    );
}
/*
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
  }*/

  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
  search(): void {
    //console.log('Recherche en cours pour :', this.searchQuery);
    if (this.searchQuery.trim() !== '') {
      const filteredAdmins = this.adminPointRelaisList.filter(admin => {
        const nom = admin.nom ? admin.nom.toLowerCase() : '';
        const prenom = admin.prenom ? admin.prenom.toLowerCase() : '';
        const numerotelephone = admin.numerotelephone ? admin.numerotelephone.toString() : '';
        const email = admin.email ? admin.email.toLowerCase() : '';
        return nom.includes(this.searchQuery.toLowerCase()) ||
               prenom.includes(this.searchQuery.toLowerCase()) ||
               numerotelephone.includes(this.searchQuery.toLowerCase()) ||
               email.includes(this.searchQuery.toLowerCase());
      });
      console.log('Résultat de la recherche :', filteredAdmins);
      this.adminPointRelaisList = filteredAdmins;
    } else {
      // Si la requête de recherche est vide, réinitialisez la liste des administrateurs
      this.loadAdminPointRelais();
    }
  }
  
  
  

}
  
