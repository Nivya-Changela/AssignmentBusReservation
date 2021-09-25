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

  registerForm = new FormGroup({
    passengerName: new FormControl(''),
    busNo: new FormControl(''),
    seatNo: new FormControl(''),
    departureDate: new FormControl(''),
    email: new FormControl(''),
  })

  addTraveller: string = "http://localhost:8085/booking/addBooking";

  registerTravller(data: any) {

    console.warn(data);
    return this.http.get("http://localhost:8085/booking/addBooking?passengerName=" + data.passengerName + "&busNo=" + data.busNois + "&seatNo=" + data.seatNois + "&departureDate=" + data.departureDate + "&email=" + data.email)
      .subscribe((res) => {
        console.log(res);
      });

  }
  logout() {
    this.router.navigate(['/seat-reservation']);
  }
  proceedPayment(){
    this.router.navigate(['/payment']);
  }
  ngOnInit(): void {
  }

}
