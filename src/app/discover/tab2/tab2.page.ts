import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { DiscoverService } from 'src/app/service/discover.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  listOffer:Car[]=[];
  userId:number;
  constructor(private service:DiscoverService) { }

  async ngOnInit() {
    let user:any = await localStorage.getItem("user");
    this.userId=user.id;
    this.service.getMyOffer(this.userId).subscribe(data=>{
      this.listOffer=data;
    })
  }

}
