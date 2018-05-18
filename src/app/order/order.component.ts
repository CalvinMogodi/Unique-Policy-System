import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    loading: boolean = true;
    orders = [];
    constructor(public router: Router) {

    }
    ngOnInit() {
        let priceRef = firebase.database().ref('juicePrice');
         priceRef.orderByValue().on("value", juicePrice => {
             let price = juicePrice.val();
        let usersRef = firebase.database().ref('orders');
        usersRef.orderByValue().on("value", snapshot => {
            this.orders = [];
            snapshot.forEach(order => {                
                var thisOrder = order.val();
                thisOrder.cost = price * thisOrder.quantity;
                thisOrder.key = order.key;
                if(thisOrder.uploadedPOP){
                }
                this.orders.push(thisOrder);

                return false;
            });
            this.loading = false;
        });
        });
    }
}