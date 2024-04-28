import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
