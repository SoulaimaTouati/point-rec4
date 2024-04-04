import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AdminPointRelais } from '../../interface/adminpointrelais';
import { AdminPointRelaisService } from '../../services/adminpointrelais.service';

@Component({
  selector: 'app-adminpointrelais',
  templateUrl: './adminpointrelais.component.html',
  styleUrls: ['./adminpointrelais.component.css']
})
export class AdminpointrelaisComponent implements OnInit {
  adminPointRelaisList: AdminPointRelais[] = [];

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


  countRows(name: string): number {
    return this.adminPointRelaisList.filter(admin => admin.nom === name).length;
  }

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
  }
  

  @ViewChild('btnToggleForm') btnToggleForm!: ElementRef;
  afficherFormulaire: boolean = false;
  nom: string = ''; 
  prenom: string = '';
  idadminpointrelais:number= 0;
  numerotelephone:number= 0;
  motdepasse:string='';

  toggleFormulaire(): void {
    this.afficherFormulaire = !this.afficherFormulaire;
    /*if (this.afficherFormulaire) {
      // retir le focus

      this.btnToggleForm.nativeElement.blur();
    }*/
  }

  ajouterResponsable(): void {
    // cest pour ajouter le responsable //la logique
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
  }
}
