import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';


@Component({
  selector: 'app-adminpointrlais',
  templateUrl: './adminpointrlais.component.html',
  styleUrl: './adminpointrlais.component.css'
})
export class AdminpointrlaisComponent implements OnInit {

  isOpen: boolean = true;

  constructor(private aprsidebrservice : AprsidebarService){ }
  ngOnInit(): void {
    this.isOpen = this.isOpen;
  }
  openSidebar() {
    this.aprsidebrservice.openSidebar();
  }

}
