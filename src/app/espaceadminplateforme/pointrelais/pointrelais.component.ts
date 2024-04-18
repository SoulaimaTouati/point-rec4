import { Component, OnInit } from '@angular/core';
import { PointRelais } from '../../interface/pointrelais';
import { Init } from 'v8';
import { PointrelaisService } from '../../services/pointrelais.service';

@Component({
  selector: 'app-pointrelais',
  templateUrl: './pointrelais.component.html',
  styleUrl: './pointrelais.component.css'
})
export class PointrelaisComponent implements OnInit {



  pointrelaislist:PointRelais[]=[];

  constructor(private pointrelais: PointrelaisService) {}

ngOnInit(): void {
}
}
