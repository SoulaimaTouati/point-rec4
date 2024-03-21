import { Component, OnInit } from '@angular/core';
import { AdminPlateforme } from '../../interface/admin-plateforme';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-adminplateforme',
  templateUrl: './adminplateforme.component.html',
  styleUrl: './adminplateforme.component.css'
})
export class AdminplateformeComponent implements OnInit {

  admins: AdminPlateforme[] = [];
  constructor(private authentificationService: AuthentificationService) {}

  ngOnInit(): void {
    this.getAllAdminPlateforme();
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
