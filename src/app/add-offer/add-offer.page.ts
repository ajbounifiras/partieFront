import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { DiscoverService } from '../service/discover.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.page.html',
  styleUrls: ['./add-offer.page.scss'],
})
export class AddOfferPage implements OnInit {
  car:Car=new Car;
  constructor(private service:DiscoverService) { }

  ngOnInit() {
  }
  addOffer(){
    this.service.addOffer(this.car).subscribe();
  }

}
