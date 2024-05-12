import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { PointrelaisService } from '../services/pointrelais.service';
import { PointRelais } from '../interface/pointrelais';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent implements OnInit {
  //private breakpointObserver = inject(BreakpointObserver);
  regions: string[] = ['Tunis 1', 'Tunis 2', 'Sfax et Sud','Sousse centre et Sahel']; // Supposons que vous avez une liste de régions
  selectedRegion: string="";
  numberOfPointRelais: number=0;

  cards: any;

  constructor(private pointRelaisService: PointrelaisService,private breakpointObserver: BreakpointObserver) {
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
    // Initialiser le composant avec la première région de la liste
    this.selectedRegion = this.regions[0];
    this.updatePointRelaisCount();
  }
 

  
    onRegionChange() {
      // Méthode appelée lorsque la région sélectionnée change
      this.updatePointRelaisCount();
    }
  
    private updatePointRelaisCount() {
      // Appeler votre service pour obtenir le nombre de points relais pour la région sélectionnée
      this.pointRelaisService.getNumberOfPointRelais(this.selectedRegion).subscribe(count => {
        this.numberOfPointRelais = count;
      });
    }
}
