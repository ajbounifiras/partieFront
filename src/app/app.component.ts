import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Discover Cars', url: '/discover/tab1/', icon: 'mail' },
    { title: 'contact', url: '/contact', icon: 'archive' },
  ];
  constructor(private router:Router) {}
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl("/login");
  }
}
