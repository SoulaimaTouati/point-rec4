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
  
    closeSidebar() {
      this.aprSidebarService.closeSidebar();
    }
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.aprSidebarService.openSidebar();
      } else {
        this.aprSidebarService.closeSidebar();
      }
    }
  }
  

