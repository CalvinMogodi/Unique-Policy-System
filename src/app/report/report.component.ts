import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportsComponent implements OnInit {
    loading: boolean = true;
    orders = [];
    constructor(public router: Router) {

    }
    ngOnInit() {
         }
}