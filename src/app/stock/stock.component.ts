import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
    loading: boolean = true;
    juices = [];
    constructor(public router: Router) {

    }
    ngOnInit() {
        firebase.database().ref('stock').orderByValue().on("value", snapshot => {
            var juiceList = [];
            //snapshot.forEach( childSnapshot => {
             //   juiceList.push(childSnapshot.val());
            //});
            this.juices = snapshot.val();
        });
    }
}