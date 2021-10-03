import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [
    
  ]
})
export class PaymentComponent implements OnInit {

  passengerName= sessionStorage.getItem('passengerName');
  seatNo  = sessionStorage.getItem('seatNo');
  destination = sessionStorage.getItem('destination');
  source  =sessionStorage.getItem('source');
  dateOfJourney  = sessionStorage.getItem('dateOfJourney');
  emailbook  = sessionStorage.getItem('emailbook');
  busNo  = sessionStorage.getItem('busNo');
  costPerSeat  = sessionStorage.getItem('costPerSeat');
  driverName  = sessionStorage.getItem('driverName');
  travelsName = sessionStorage.getItem('travelsName');
  departureTime  = sessionStorage.getItem('departureTime');
  arrivalTime  = sessionStorage.getItem('arrivalTime');

  constructor(public router : Router) { 
  }

  ngOnInit(): void {
    
  }
  payWithCard(){
    this.router.navigate(['/home']);
  }
  deductAmt(){
   
  }
  logout()
  {
    this.router.navigate(['/reservation-details']);
  }
}

