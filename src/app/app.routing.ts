import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DeshboardComponent } from './deshboard/deshboard.component';
import { CreatePolicyComponent } from './policy/createPolicy/createPolicy.component';

const routes: Routes =[
    { path: 'dashboard', component: DeshboardComponent },       
    { path: 'createNewPolicy',component: CreatePolicyComponent }
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
