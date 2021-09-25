import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  BaseUrl: string = "http://localhost:8085/user/";
  //BusAllDetailsUrl:string="http://localhost:8085/busDetails/getAllBusDetails";
  // baseURL : string = 'http://localhost:8085/busDetails/';
  // baseURL2 : string ='http://localhost:8085/reserv/';
  // BusDetailsByRoute: string="http://localhost:8085/busDetails/getBusByRoute";
  // busAllDetails: string="http://localhost:8085/busDetails/getAllBusDetails";

  constructor(private http: HttpClient) { }

  checkLogin(email: string, password: string) {
    return this.http.get(this.BaseUrl + "/login?email=" + email + "&password=" + password);
  }

  registerUser(user: UserProfile): Observable<any> {
    return this.http.post<any>(this.BaseUrl + "register", user);
  }

  


}

