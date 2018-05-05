import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { provideRoutes} from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { CreatePolicyComponent } from './policy/createPolicy/createPolicy.component';
import { UserserviceProvider } from '../providers/userservice/userservice';

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
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    UserserviceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
