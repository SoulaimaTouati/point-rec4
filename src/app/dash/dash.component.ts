import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { PointrelaisService } from '../services/pointrelais.service';
import { PointRelais } from '../interface/pointrelais';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  regions: string[] = ['Tunis 1', 'Tunis 2', 'Sfax et Sud', 'Sousse centre et Sahel'];
  selectedRegion: string = "";
  numberOfPointRelais: number = 0;

  cards: any;

  constructor(private pointRelaisService: PointrelaisService, private breakpointObserver: BreakpointObserver) {
    this.cards = this.pointRelaisService.getAllPointRelais().pipe(
      map((pointRelais: PointRelais[]) => {
        return pointRelais.map(relais => ({
          title: `Point Relais ${relais.num_pointrelais}`,
          cols: 1,
          rows: 1,
          data: relais
        }));
      })
    );
  }

  ngOnInit() {
    this.selectedRegion = this.regions[0];
    this.updatePointRelaisCount();
    this.generatePieChart(); // Appel initial à la méthode pour afficher le diagramme au chargement du composant
  }

  onRegionChange() {
    this.updatePointRelaisCount();
    this.generatePieChart();   // Appel à la méthode lorsque la région sélectionnée change
  }

  private updatePointRelaisCount() {
    this.pointRelaisService.getNumberOfPointRelais(this.selectedRegion).subscribe(count => {
      this.numberOfPointRelais = count;
    });
  }

  
  private generatePieChart(): void {
    this.pointRelaisService.getAllPointRelais().subscribe((pointRelais: PointRelais[]) => {
      // Créer un objet pour stocker le nombre de points relais pour chaque région
      const regionCounts: { [region: string]: number } = {};
  
      // Compter le nombre de points relais pour chaque région
      pointRelais.forEach(relais => {
        if (!regionCounts[relais.Region]) {
          regionCounts[relais.Region] = 1;
        } else {
          regionCounts[relais.Region]++;
        }
      });
  
      // Extraire les noms de région et les comptes de points relais
      const labels = Object.keys(regionCounts);
      const counts = Object.values(regionCounts);
  
      const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
  
      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: counts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)' // Ajoutez plus de couleurs au besoin
              ],
            }]
          },
          options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed) {
                    label += context.parsed.toLocaleString();
                  }
                  return label;
                }
              }
            },
            legend: {
              labels: {
                font: {
                  size: 10 // Définissez la taille de la police des étiquettes
                }
              }
            }
          },
           maintainAspectRatio: false, // Désactiver le maintien du ratio d'aspect
          aspectRatio: 15
        }
        });
      } else {
        console.error('Impossible de récupérer le contexte du canvas.');
      }
    });
  }
  
}


