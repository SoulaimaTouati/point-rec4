import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-ajoutercolisadelivre',
  templateUrl: './ajoutercolisadelivre.component.html',
  styleUrl: './ajoutercolisadelivre.component.css'
})
export class AjoutercolisadelivreComponent {
  isOpen: boolean = true;
constructor(private aprsidebarservice:AprsidebarService){}
  ngOnInit() {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
  openSidebar() {
    this.aprsidebarservice.openSidebar();
  }
  
}
