import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';


@Component({
  selector: 'app-adminpointrlais',
  templateUrl: './adminpointrlais.component.html',
  styleUrl: './adminpointrlais.component.css'
})
export class AdminpointrlaisComponent {
  constructor(private aprsidebrservice : AprsidebarService){ }
  openSidebar() {
    this.aprsidebrservice.openSidebar();
  }

}
