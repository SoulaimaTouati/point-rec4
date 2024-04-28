import { Component, OnInit } from '@angular/core';
import { PointRelais } from '../../interface/pointrelais';
import { Init } from 'v8';
import { PointrelaisService } from '../../services/pointrelais.service';
import { AprsidebarService } from '../../services/aprsidebar.service';

@Component({
  selector: 'app-pointrelais',
  templateUrl: './pointrelais.component.html',
  styleUrl: './pointrelais.component.css'
})
export class PointrelaisComponent implements OnInit {
  constructor(private pointrelais: PointrelaisService,private aprsidebarservice:AprsidebarService) {}

  pointrelaislist:PointRelais[]=[];
  isOpen: boolean = true;

  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;    });
    }
    openSidebar() {
      this.aprsidebarservice.openSidebar();
    }

  }

