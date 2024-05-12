import { Component } from '@angular/core';
import { ColisService } from '../../services/colis.service';

@Component({
  selector: 'app-consulterdashboard',
  templateUrl: './consulterdashboard.component.html',
  styleUrl: './consulterdashboard.component.css'
})
export class ConsulterdashboardagentComponent {
  colisData: any[] = [];

  constructor(private colisservice: ColisService) { }

  ngOnInit(): void {
    this.colisservice.getColisByState().subscribe(
      (data) => {
        this.colisData = data;
        console.log(this.colisData); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du backend :', error);
      }
    );
  }
}
