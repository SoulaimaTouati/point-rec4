import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-retourcolis',
  templateUrl: './retourcolis.component.html',
  styleUrl: './retourcolis.component.css'
})
export class RetourcolisComponent {
  constructor(private aprsidebarservice:AprsidebarService){}
  isOpen: boolean = true;
  numcolis:number=0;
  photoretour:string="assets/photos/11202493-removebg-preview.png";
  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
}

openSidebar() {
  this.aprsidebarservice.openSidebar();
}

}

