import { Component, OnInit } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent implements OnInit {
  constructor(private aprsidebarservice:AprsidebarService){}
  isOpen: boolean = true;

  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;    });
  


}
openSidebar() {
  this.aprsidebarservice.openSidebar();
}

}
