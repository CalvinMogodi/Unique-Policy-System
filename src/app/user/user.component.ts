import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import * as firebase from 'firebase';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonService} from '../shared/common';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserserviceProvider, CommonService]
})
export class UserComponent implements OnInit {
    loading: boolean = true;
    users = [];
    constructor(public userService: UserserviceProvider, public router: Router, public commonService: CommonService) {
        let usersRef = firebase.database().ref('users');
        usersRef.orderByValue().on("value", snapshot => {
            var userList = [];
            snapshot.forEach((item) => {
                userList.push(item.val());
                return false;
            });
            this.users = userList;
            this.loading = false;
        });
    }
    ngOnInit() {

    }

    navigate(url, user) {
        this.commonService.assginUser(user);
        this.router.navigate(['userDetails']);
    }

}
