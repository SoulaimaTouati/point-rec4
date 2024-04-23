import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = true;

  ngOnInit() {
    // Souscrivez à l'observable isOpen$ pour écouter les changements de la valeur isOpen
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
  constructor(private aprsidebarservice: AprsidebarService){}
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