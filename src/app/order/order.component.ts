import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceProvider } from '../../providers/orderservice/orderservice';
import * as firebase from 'firebase';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    loading: boolean = true;
    orders = [];
    public notification = {
        meaagse: '',
        isSuccessful: false};
    constructor(public router: Router, public orderService: OrderServiceProvider) {

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

    approveOrder(order){
        if(order.status == 'Awaiting Approval'){
           order.status = 'Awaiting Final Approval' 
        }else if(order.status == 'Awaiting Final Approval'){
            order.status == 'Approved'
        }

       this.orderService.approveOrder(order).then(result => {     
            if(order.status = 'Awaiting Final Approval' ){
                 this.notification.meaagse = 'Order is approved success and waiting for final approval.';
            }else{
                 this.notification.meaagse = 'Order is approved success and ready for delivery.';
                 //send email to user
            }           
            this.notification.isSuccessful = false;
        }, error => {
        this.notification.meaagse = 'Unable to approve order.';
        this.notification.isSuccessful = false;
        this.loading = false;
       });
    }

    closeNotification(){
        this.notification.meaagse = '';
    }
}