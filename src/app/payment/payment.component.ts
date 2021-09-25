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

  constructor(public router : Router) { 
  }
  ngOnInit(): void {
  
  }
  payWithCard(){

  }
  deductAmt(){
    this.router.navigate(['/home']);
  }
  logout()
  {
    this.router.navigate(['/reservation-details']);
  }
}

