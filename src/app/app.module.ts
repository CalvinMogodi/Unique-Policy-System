import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { provideRoutes} from '@angular/router';
import { RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { CreatePolicyComponent } from './policy/createPolicy/createPolicy.component';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { CommonService } from './shared/common';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/userDetails/userDetails.component';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';
import { ReportsComponent } from './report/report.component';


import * as firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyDNZ2-urHkW0xoe9rh9aexpp__FeHybkb8",
    authDomain: "terasherbal-7694e.firebaseapp.com",
    databaseURL: "https://terasherbal-7694e.firebaseio.com",
    projectId: "terasherbal-7694e",
    storageBucket: "terasherbal-7694e.appspot.com",
    messagingSenderId: "303502211142"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [     
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    DeshboardComponent,
    CreatePolicyComponent,
    UserComponent,
    StockComponent,
    UserDetailsComponent,
    OrderComponent,
    ReportsComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserserviceProvider,
    CommonService,
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
