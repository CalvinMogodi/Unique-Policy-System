import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true ; 
  showForgotPassword: boolean = false ; 
  showRegisterUser: boolean = false ; 
  showChangePassword: boolean = false ; 
  showOTP: boolean = false ; 
  constructor(public router: Router) { }

  ngOnInit() {

  }

  OpenAction(action) {
    this.showLogin = false;
    this.showForgotPassword = false;
    this.showRegisterUser = false;
    this.showChangePassword = false;
    this.showOTP = false;
    switch(action){
      case 'OTP': 
        this.showOTP = true;
        break;
      case 'Forgot Password':
        this.showForgotPassword = true;
        break;
      case 'Register User':
        this.showRegisterUser = true;
        break;
        case 'Change Password':
         this.showChangePassword = true;
         break;
      default:
        this.showLogin = true;
    }
  }  

  SignUp(){
      this.OpenAction('Login');
    }

   Login(){
      this.OpenAction('OTP');
    }

   ForgotPassword(){
      this.OpenAction('Change Password');
    }

    ChangePassword(){
       this.OpenAction('Login');
    }

    Submit(){
      sessionStorage.setItem('currentUser', JSON.stringify({isAuthenticated: true, userType: 'superUser'}));
      this.router.navigate(['createNewPolicy']);
    }
}
