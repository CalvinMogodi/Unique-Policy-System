import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceProvider } from '../../providers/userservice/userservice';
//import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as firebase from 'firebase'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   providers: [UserserviceProvider]
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true ; 
  showForgotPassword: boolean = false ; 
  showRegisterUser: boolean = false ; 
  showChangePassword: boolean = false ; 
  showOTP: boolean = false ; 
  // loginForm: FormGroup;
  submitAttempt: boolean = false;
  showError: boolean = false;
  public user = {
    email: '',
    password: '',
  }

  constructor(public userService: UserserviceProvider,public router: Router) { 
   // this.loginForm = formBuilder.group({
     // email: ['', Validators.compose([Validators.required])],
      //password: ['', Validators.compose([Validators.required])],
    //});
  }

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
      //this.OpenAction('Login');
      sessionStorage.setItem('currentUser', JSON.stringify({isAuthenticated: true, userType: 'superUser'}));
      this.router.navigate(['createNewPolicy']);
    }

   Login(){
      this.submitAttempt = true;
    if (true) {     
      this.userService.loginUser(this.user.email, this.user.password).then(authData => {
        sessionStorage.setItem('currentUser', JSON.stringify({isAuthenticated: true, userType: 'superUser'}));
      this.router.navigate(['dashboard']);
      }, error => {
        this.showError = true;
      });
    }
      
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
