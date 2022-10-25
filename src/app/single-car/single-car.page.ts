import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { DiscoverService } from '../service/discover.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.page.html',
  styleUrls: ['./single-car.page.scss'],
})
export class SingleCarPage implements OnInit {
  car:Car=new Car;
  id:number;
  constructor(private route: ActivatedRoute, private service:DiscoverService) { }

  async ngOnInit() {
    this.id = await this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data=>{
      console.log(data);
      this.car=data;
    })
    
  }

   addToFavorite(){
   this.service.saveFavorite(this.car);
  }


}
