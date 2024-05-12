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
    //observable isOpen$ pour écouter les changements de la valeur isOpen
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.cookieService.set('username', 'valeur-du-username');
      this.nom = this.authService.getUsername();
    });
  }
  isCollapsed: boolean = false;
 isDropdownOpen1: boolean = false;
 isDropdownOpen2: boolean = false;

  toggleDropdown1(event: Event) {
   // event.preventDefault(); // Empêche le lien de suivre son URL
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  toggleDropdown2(event: Event) {
    // event.preventDefault(); // Empêche le lien de suivre son URL
     this.isDropdownOpen2 = !this.isDropdownOpen2;
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

  openDropdown(dropdownNumber: number): void {
    if (dropdownNumber === 1) {
      this.isDropdownOpen1 = true;
      this.isDropdownOpen2 = false; // Fermer l'autre dropdown si ouvert
    } else if (dropdownNumber === 2) {
      this.isDropdownOpen2 = true;
      this.isDropdownOpen1 = false; // Fermer l'autre dropdown si ouvert
    }
  }

  closeDropdown(dropdownNumber: number): void {
    if (dropdownNumber === 1) {
      this.isDropdownOpen1 = false;
    } else if (dropdownNumber === 2) {
      this.isDropdownOpen2 = false;
    }}
}