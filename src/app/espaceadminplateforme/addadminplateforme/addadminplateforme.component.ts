import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-addadminplateforme',
  templateUrl: './addadminplateforme.component.html',
  styleUrl: './addadminplateforme.component.css'
})
export class AddadminplateformeComponent {
  constructor(private aprsidebarservice: AprsidebarService){}
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
}
