import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  apiUrl: string = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getData():any{
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id:number):any{
    return this.http.get(`${this.apiUrl}${id}`);
  }

  getMyOffer(id:number):any{
    return this.http.get(`${this.apiUrl}myOffer/${id}`);
  }

  login(user:User){
    return this.http.post<User>(`${this.apiUrl}login`, JSON.stringify(user), this.httpOptions );
  }


  async saveFavorite(car:Car){
    let list:Car[]=[];
    list = await JSON.parse(localStorage.getItem("favorites")) || [];
    list = [...list, car]
    localStorage.setItem("favorites",JSON.stringify(list));
  }

  addOffer(car:Car){
    return this.http.post<Car>(`${this.apiUrl}addOffer`, JSON.stringify(car), this.httpOptions )
  }

}
