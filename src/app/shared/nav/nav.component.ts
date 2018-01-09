import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

   Navigate(url){
      this.router.navigate([url]);
    }

    isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
