  import { Component, OnInit } from '@angular/core';
  import { AprsidebarService } from '../../../services/aprsidebar.service';
  import { ActivatedRoute } from '@angular/router';
  import { PointRelais } from '../../../interface/pointrelais';
  import { Router } from '@angular/router';
  import { AdminPointRelaisService } from '../../../services/adminpointrelais.service';


  @Component({
    selector: 'app-consulterdashboard',
    templateUrl: './consulterdashboard.component.html',
    styleUrls: ['./consulterdashboard.component.css']
  })
  export class ConsulterdashboardComponent implements OnInit {
    
    pointsRelais: PointRelais[] = [];
    name: string = '';
    lastname: string = '';
    isOpen: boolean = true;


    constructor(private aprsidebarservice: AprsidebarService, private router: Router, private route: ActivatedRoute, private adminPointRelaisService:AdminPointRelaisService) { }

    ngOnInit(): void {
        this.aprsidebarservice.isOpen$.subscribe(isOpen => {
          this.isOpen = isOpen;
        });
      
      this.route.params.subscribe(params => {
        const idadminpointrelais = +params['id'];
        if (idadminpointrelais) {
          // Appeler le service pour obtenir les points relais associés à l'administrateur en utilisant l'ID
          this.adminPointRelaisService.getPointRelaisByAdminId(idadminpointrelais).subscribe(
          (data: PointRelais[]) => {
            this.pointsRelais = data;
          },
            (error) => {
              console.log('Erreur lors de la récupération des points relais :', error);
            }
          );
        }  

        // Récupérer les données du state si elles sont disponibles
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras && navigation.extras.state) {
          const state = navigation.extras.state;
          this.name = state['name'];
          this.lastname = state['lastname'];
        }
      });
    }

    openSidebar() {
      this.aprsidebarservice.openSidebar();
    }
  }
