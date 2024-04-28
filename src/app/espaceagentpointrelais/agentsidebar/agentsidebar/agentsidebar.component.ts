import { BreakpointObserver } from '@angular/cdk/layout';
import {Component,OnInit,ViewChild,} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AprsidebarService } from '../../../services/aprsidebar.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../../services/authentification.service';

@Component({
  selector: 'app-agentsidebar',
  templateUrl: './agentsidebar.component.html',
  styleUrls: ['./agentsidebar.component.css']
})
export class AgentsidebarComponent implements OnInit {
  constructor(private aprsidebarservice: AprsidebarService,private cookieService: CookieService , private authService:AuthentificationService){}

  isOpen: boolean = true;
  nom: string = '';
  userId:number=0;
  ngOnInit() {
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
