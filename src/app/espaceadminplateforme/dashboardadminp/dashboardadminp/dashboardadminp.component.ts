import {  Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../../services/aprsidebar.service';
import { PointrelaisService } from '../../../services/pointrelais.service';
import { PointRelais } from '../../../interface/pointrelais';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboardadminp',
  templateUrl: './dashboardadminp.component.html',
  styleUrls: ['./dashboardadminp.component.css'],

})
export class DashboardadminpComponent implements OnInit {
  isOpen: boolean = true;
  pointsRelais: PointRelais[] = [];
  name: string = '';
  lastname: string = '';
  regions: string[] = [];
  selectedRegion: string = '';
  chart = new Chart();

  constructor(private aprsidebarservice: AprsidebarService, private pointsRelaisservice: PointrelaisService) { }

  ngOnInit(): void {
    this.getPointsRelais(); // Appel de la méthode pour récupérer les points relais
  }

  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }

  // Méthode pour récupérer les points relais depuis le service
  getPointsRelais(): void {
    this.pointsRelaisservice.getAllPointRelais().subscribe(
      (data: PointRelais[]) => {
        this.pointsRelais = data;
        this.regions = this.getUniqueRegions(); // Met à jour les régions une fois les données récupérées
        this.createPieChart(); // Crée le graphique une fois les données récupérées
      },
      (error) => {
        console.log('Erreur lors de la récupération des points relais :', error);
      }
    );
  }
  filteredPointsRelais:PointRelais[] = [];
  // Méthode pour filtrer les points relais par région
  filterPointsRelaisByRegion(): void {
    if (this.selectedRegion === '') {
      // Si aucune région n'est sélectionnée, afficher tous les points relais
      this.filteredPointsRelais = this.pointsRelais;
    } else {
      // Filtrer les points relais pour n'afficher que ceux de la région sélectionnée
      this.filteredPointsRelais = this.pointsRelais.filter(point => point.Region === this.selectedRegion);
    }
  }

  // Méthode pour obtenir les régions uniques à partir des points relais
  getUniqueRegions(): string[] {
    return Array.from(new Set(this.pointsRelais.map(point => point.Region)));
  }

  createPieChart(): void {
    // Préparation des données pour le graphique en secteur
    const labels = this.regions; // Utiliser les régions comme étiquettes
    const data = this.getPointsRelaisCountByRegion(); // Obtenir le nombre de points relais par région

    this.chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Nombre de points relais par région'
      },
      series: [
       /* {
        name: 'Points relais',
        data: [labels.map((label, index) => ({ name: label, y: data[index] }))]
      }*/]
    });
  }

  // Méthode pour obtenir le nombre de points relais par région
  getPointsRelaisCountByRegion(): number[] {
    const pointsRelaisCountByRegion: number[] = [];
    for (const region of this.regions) {
      const count = this.pointsRelais.filter(point => point.Region === region).length;
      pointsRelaisCountByRegion.push(count);
    }
    return pointsRelaisCountByRegion;
  }
}
/*
  filterPointsRelaisByRegion(): void {
    if (this.selectedRegion === '') {
      this.filteredPointsRelais = this.pointsRelais;
    } else {
      this.filteredPointsRelais = this.pointsRelais.filter(point => point.Region === this.selectedRegion);
    }
  }
/*
  getPointsRelaisCountByRegion(): number[] {
    const pointsRelaisCountByRegion = [];
    for (const region of this.regions) {
      const count = this.pointsRelais.filter(point => point.Region === region).length;
      pointsRelaisCountByRegion.push(count);
    }
    return pointsRelaisCountByRegion;
  }
}*/
