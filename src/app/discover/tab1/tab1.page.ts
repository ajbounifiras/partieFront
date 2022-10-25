import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { DiscoverService } from 'src/app/service/discover.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public segment: string = "cars";
  public arr = new Array(25);
  constructor(private service:DiscoverService, private router:Router) { }
  carsData:Car[]=[];
  listFav:Car[]=[];

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      this.carsData=data;
      console.log(this.carsData);
    });
    this.listFav = JSON.parse(localStorage.getItem("favorites")) || []; 
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }


}
