import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed: boolean = false;
 isDropdownOpen: boolean = false;

  toggleDropdown(event: Event) {
   // event.preventDefault(); // Empêche le lien de suivre son URL
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}