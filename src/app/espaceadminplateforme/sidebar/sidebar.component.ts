import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';

import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private aprsidebarservice: AprsidebarService,private cookieService: CookieService, private authService:AuthentificationService ){}

  isOpen: boolean = true;
  nom: string = '';
  userId:number=0;
  ngOnInit() {
    // Souscrivez à l'observable isOpen$ pour écouter les changements de la valeur isOpen
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.cookieService.set('username', 'valeur-du-username');
      this.nom = this.authService.getUsername();
    });
  }
  isCollapsed: boolean = false;
 isDropdownOpen: boolean = false;

  toggleDropdown(event: Event) {
   // event.preventDefault(); // Empêche le lien de suivre son URL
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
  closeSidebar() {
    this.aprsidebarservice.closeSidebar();
  }
}