import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent implements OnInit {
 constructor(private router : Router ) {}
 logout()
 {
   console.log("logging out the user");
   this.router.navigate(['/home']);
 }
 cancelreservationcomponent(){
   
 }
  ngOnInit(): void {
  }
  
  

}

