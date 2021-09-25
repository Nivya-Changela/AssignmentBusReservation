import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';


const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home',component : HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},

  {path: 'aboutus',component: AboutComponent},
  {path: 'contactus',component:ContactUsComponent},

  {path: 'seat-reservation',component:SeatReservationComponent},
  {path: 'reservation-details', component:ReservationDetailsComponent},
  {path : 'payment',component : PaymentComponent},

  {path : 'cancel-reservation',component : CancelReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
