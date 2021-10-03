import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Traveller } from '../models/Traveller';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  traveller: Traveller = new Traveller("", "", "", new Date(), "");
  constructor(private router: Router, private http: HttpClient) { }

  busNois: string = sessionStorage.getItem('busNo');
  seatNois: string = sessionStorage.getItem('seatNo');
  passengerName:string ;
  departureDate:string = sessionStorage.getItem('dateOfJourney');
  email:string;

  
  registerForm = new FormGroup({
    passengerName: new FormControl(''),
    busNois: new FormControl(''),
    seatNois: new FormControl(''),
    departureDate: new FormControl(''),
    email: new FormControl(''),
  })

  addTraveller: string = "http://localhost:8085/booking/addBooking";

  registerTravller(data) {
    
    console.log("form data submiting");
    console.warn(data);
    return this.http.get("http://localhost:8085/booking/addBooking?passengerName=", data)
      .subscribe((res) => {
       
        console.log(res);
      });

  }
  logout() {
    this.router.navigate(['/seat-reservation']);
  }
  proceedPayment(){
   
    // console.log(this.seatNois);
    // console.log(this.busNois);
    // console.log(this.passengerName);
    // console.log(this.departureDate);
    // console.log(this.email);
    
    // var data={
    //   "passengerName":this.passengerName,
    //   "busNo":this.busNois,
    //   "seatNo":this.seatNois,
    //   "departureDate":this.departureDate,
    //   "email":this.email,
    // }
    console.log(this.registerForm);
    sessionStorage.setItem('passengerName',this.passengerName);
    sessionStorage.setItem('emailbook',this.email);
    // return this.http.post("http://localhost:8085/booking/addBooking",this.registerForm.getRawValue())
    // .subscribe((res) => {
    //   console.log(res);
    //   this.router.navigate(['/payment']);
     
    // });
     this.router.navigate(['/payment']);

  }
  ngOnInit(): void {
  }

}
