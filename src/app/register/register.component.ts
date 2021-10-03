import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusServiceService } from '../Service/bus-service.service';
import { UserProfile } from '../models/UserProfile';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  username : any;
  userProfile: UserProfile = new UserProfile("", "", "", "", "", new Date());
  constructor(private service: BusServiceService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      cpwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
      contactno: new FormControl('')
    })

  }

  registerUser() {
    this.service.registerUser(this.userProfile).subscribe((result) => {
    this.username = this.userProfile.userName;

    sessionStorage.setItem('username',this.userProfile.userName);
    });
    
    
    this.router.navigate(['/login']);
  }
}

