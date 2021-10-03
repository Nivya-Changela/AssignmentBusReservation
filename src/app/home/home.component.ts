import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private router: Router, private myHttp: HttpClient) {
    this.username  =sessionStorage.getItem('username');
  }
  username : any;// | undefined = sessionStorage.getItem('username');;
  costPerSeat: number;
  busCostData: any;
  sourceChose: string;
  destinationChosen: string;
  busesdata: any;
  dateOfJourney :any;
 

  locations = [
    { name: "Nagpur", value: 1 },
    { name: "Chandigarh", value: 2 },
    { name: "Mumbai", value: 3 },
    { name: "Pune", value: 4 },
    { name: "Surat", value: 5 },
  ]
  
  BusDetailsByRoute: string = "http://localhost:8085/busDetails/getBusByRoute";

  listBus() {
   
    this.router.navigate(['/seat-reservation']);
  }
  checkData() {
    let result = this.myHttp.get(this.BusDetailsByRoute + "/" + this.destinationChosen + "/" + this.sourceChose);
    result.subscribe((data) => {
      this.busesdata = data;
      this.busCostData = data[0];
      console.log(data);
      console.log(data[0]);
      
      
      sessionStorage.setItem('dateOfJourney',this.dateOfJourney);
      sessionStorage.setItem('SeatNo', this.busesdata.no_of_seats);
      sessionStorage.setItem('busNo', this.busCostData.bus_no);
      sessionStorage.setItem('busId', this.busCostData.bus_id);
      sessionStorage.setItem('costPerSeat', this.busCostData.cost_per_seat);
      sessionStorage.setItem('destination', this.destinationChosen);
      sessionStorage.setItem('source', this.sourceChose);
      sessionStorage.setItem('driverName',this.busCostData.driver_name);
      sessionStorage.setItem('travelsName',this.busCostData.travels_name);
      sessionStorage.setItem('departureTime',this.busCostData.departure_time);
      sessionStorage.setItem('arrivalTime',this.busCostData.arrival_time);

    })

  }

}