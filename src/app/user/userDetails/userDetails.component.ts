import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserserviceProvider } from '../../../providers/userservice/userservice';
import { CommonService } from '../../shared/common';

@Component({
    selector: 'app-userDetails',
    templateUrl: './userDetails.component.html',
    styleUrls: ['./userDetails.component.css']
})
export class UserDetailsComponent implements OnInit {
    loading: boolean = true;
    submitAttempt: boolean = false;
    showError: boolean = false;
    isEdit: boolean = true;
    isUser: boolean = true;
    roles = ["Stcok Capturer", "Admin", "Employee"];
    profileImgUrl = 'assets/img/profile.png';
    profileImage: any;
    public user: any;
    userForm: FormGroup;
    constructor(public userService: UserserviceProvider, public router: Router, public commonService: CommonService, public formBuilder: FormBuilder) {
        this.user = this.commonService.getUser();

        if (this.user == null) {
            this.isEdit = false;
            this.isUser = false;
            this.user = {
                isActive: false,
                email: '',
                name: '',
                IDNumber: '',
                surname: '',
                userType: 'Employee',
                cellPhone: '',
                password:'usermustchange'
            }
        }
        else {
            this.isEdit = true;
        }

    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required])],
            IDNumber: ['', Validators.compose([Validators.required])],
            surname: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required])],
            cellPhone: ['', Validators.compose([Validators.required])],
        });
    }

    fileChangeEvent(fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.profileImgUrl = event.target.result;
            }
            reader.readAsDataURL(fileInput.target.files[0]);
        }
        this.profileImage = fileInput.target.files[0];
    }

    createUser() {
        this.submitAttempt = true;
        this.showError = false;
        if (this.userForm.valid) {
            this.userService.insertUser(this.user, this.profileImage).then(userId => {
            }, error => {
        this.showError = true;
        this.loading = false;
      });
        }
    }
}