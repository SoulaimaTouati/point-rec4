import { Component } from '@angular/core';
import { AprsidebarComponent } from '../../../espaceadminpointrelais/aprsidebar/aprsidebar.component';
import { AprsidebarService } from '../../../services/aprsidebar.service';

@Component({
  selector: 'app-consulterdashboard',
  templateUrl: './consulterdashboard.component.html',
  styleUrl: './consulterdashboard.component.css'
})
export class ConsulterdashboardComponent {

  constructor(private aprsidebarservice:AprsidebarService ){}
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
}
