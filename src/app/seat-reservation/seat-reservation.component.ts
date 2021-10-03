
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusSeatDetails } from '../models/BusSeatDetails';
@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent {
  buttonststus: string="unselected";
  reservedbuttonStatus: string[]=["selected","selected","selected","selected","selected","selected",
  "selected","selected","selected","selected","selected","selected","selected","selected","selected",
  "selected","selected","selected","selected","selected","selected"]; 
  BusSeatDetails: BusSeatDetails = new BusSeatDetails("30", 41, 23);

  total = 0;
  cost_per_seat: number;
  busNo: string;
  seats = new Set();

  constructor(private router: Router) {
  }

  changeButtonStatus(seatno: number) {
    
    this.seats = this.seats.add(seatno);
    sessionStorage.setItem('seatNo', JSON.stringify(seatno));
    this.cost_per_seat = parseInt(sessionStorage.getItem('costPerSeat'));
    this.total = this.cost_per_seat * this.seats.size;
    console.warn(this.seats);

    if(this.reservedbuttonStatus[seatno]=="selected")
    this.reservedbuttonStatus[seatno]= "unselected";

    

  }

  reserveSeat(){
    this.router.navigate(['/reservation-details']);
  }
  logout() {
    this.router.navigate(['/home']);
  }


}