import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { AuthentificationService } from '../../services/authentification.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-adminpointrlais',
  templateUrl: './adminpointrlais.component.html',
  styleUrl: './adminpointrlais.component.css'
})
export class AdminpointrlaisComponent implements OnInit {

 
  nom: string = ''; 
  prenom: string = '';
  numerotelephone:number= 0;
  idadminpointrelais:number=0;
  motdepasse:string='';
  email='';
  userId:number=0;

  isOpen: boolean = true;

  constructor(private authentificationService: AuthentificationService ,private aprsidebarservice: AprsidebarService,
    private cookieService: CookieService,private authService:AuthentificationService) {

    }

  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.cookieService.set('username', 'valeur-du-username');
      this.nom = this.authService.getUsername();
    });
      
  }  
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }




}
