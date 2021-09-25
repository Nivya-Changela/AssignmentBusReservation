import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { DatePipe } from '@angular/common';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,   
    AboutComponent,
    ContactUsComponent,
 
    RegisterComponent,
    LoginComponent,
    SeatReservationComponent,
    PaymentComponent,    
    CancelReservationComponent, ReservationDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
