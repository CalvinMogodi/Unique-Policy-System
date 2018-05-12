import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceProvider } from '../../../providers/userservice/userservice';
import { CommonService} from '../../shared/common';

@Component({
    selector: 'app-userDetails',
    templateUrl: './userDetails.component.html',
    styleUrls: ['./userDetails.component.css'],
    providers: [UserserviceProvider, CommonService]
})
export class UserDetailsComponent implements OnInit {
    loading: boolean = true;
    public user: any;
    constructor(public userService: UserserviceProvider, public router: Router, public commonService: CommonService) {
    }

     ngOnInit() {
        this.user = this.commonService.getUser();
    }
}