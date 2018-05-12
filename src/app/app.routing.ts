import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DeshboardComponent } from './deshboard/deshboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/userDetails/userDetails.component';


const routes: Routes =[
    { path: 'dashboard', component: DeshboardComponent },       
    { path: 'user',component: UserComponent },
    { path: 'userDetails',component: UserDetailsComponent }    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
