import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import * as firebase from 'firebase';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserserviceProvider]
})
export class UserComponent implements OnInit {

    users = [];
    constructor(public userService: UserserviceProvider, public router: Router) {
      let usersRef = firebase.database().ref('users');
      usersRef.orderByValue().on("value", snapshot => {
            var userList = [];
            snapshot.forEach((item) => {
                userList.push(item.val());
                return false;
            });      
            this.users =    userList; 
        });
    }

    loadData(userList) {
       this.users = userList;
    }
    ngOnInit() {

        var rgdf = 0;
    }


}
