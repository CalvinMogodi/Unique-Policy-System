import { Component } from '@angular/core';
import { Router} from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean = false ; 

  constructor(public router : Router) {
    router.events.subscribe((url:any) => { 
      var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));        
        if(url.url == '/home' || url.url == '/' ){
          this.isAuthenticated = false ;
        }
        else{
          if(currentUser != null){
            if(currentUser.isAuthenticated){
              this.isAuthenticated = true ;
            }else{
               this.isAuthenticated = false ;
            this.router.navigate(['home']); 
            }            
          }  else{
            this.isAuthenticated = false ;
            this.router.navigate(['home']);            
          }
          
        }
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
