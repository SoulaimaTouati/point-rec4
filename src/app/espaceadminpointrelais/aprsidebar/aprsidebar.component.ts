 import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

  @Component({
    selector: 'app-aprsidebar',
    templateUrl: './aprsidebar.component.html',
    styleUrls: ['./aprsidebar.component.css']
  })
  export class AprsidebarComponent implements OnInit {
    isOpen: boolean = true;

    constructor(private aprSidebarService: AprsidebarService) { }
  
    ngOnInit() {
      // Souscrivez à l'observable isOpen$ pour écouter les changements de la valeur isOpen
      this.aprSidebarService.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
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
      this.aprSidebarService.openSidebar();
    }
    closeSidebar() {
      this.aprSidebarService.closeSidebar();
    }
  }

