import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { DiscoverService } from '../service/discover.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User= new User;
  constructor(private service: DiscoverService, private router: Router) { }
  erreur:boolean=false;
  ngOnInit() {
  }
  login(){
    this.service.login(this.user).subscribe(data=>{
      console.log(data)
      if(data != null){
        localStorage.setItem('user',JSON.stringify(data))
        this.router.navigateByUrl('/discover')
        
      }else{
        this.erreur=true;
      }
    })
  }

}
