import { Component, OnInit } from '@angular/core';
import { AdminPlateforme } from '../../interface/admin-plateforme';
import { AuthentificationService } from '../../services/authentification.service';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AdminplateformeService } from '../../services/adminplateforme.service';

@Component({
  selector: 'app-adminplateforme',
  templateUrl: './adminplateforme.component.html',
  styleUrl: './adminplateforme.component.css'
})
export class AdminplateformeComponent implements OnInit {
  nom: string = ''; 
  prenom: string = '';
  numerotelephone:number= 0;
  idadminpointrelais:number=0;
  motdepasse:string='';
  email='';


  admins: AdminPlateforme[] = [];
  constructor(private authentificationService: AuthentificationService ,private aprsidebarservice: AprsidebarService,private adminplateformeservice:AdminplateformeService) {}

  ngOnInit(): void {
    this.getAllAdminPlateforme();
  }
  
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }

  getAllAdminPlateforme(): void {
    this.authentificationService.getAllAdminPlateforme().subscribe({
      next: (admins) => {
        this.admins = admins;
      },
      error: (error) => {
        console.error('Error fetching admins:', error);
      },
    });
  }   

}
