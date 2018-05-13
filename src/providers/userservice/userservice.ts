import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase'


/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;
  public storageRef: any;
  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users')
    this.storageRef = firebase.storage().ref();
  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  inserUserImage(file, userId){
    var imageRef = this.storageRef.child('profileImages/' + userId);
    imageRef.put(file).then(function(snapshot) {});
  }

  insertUser(user: {}, file:any): any {
    return this.fireAuth.createUserWithEmailAndPassword(user['email'], user['password']).then((newUser) => {
      //
      this.fireAuth.signInWithEmailAndPassword(user['email'], user['password']).then((authenticatedUser) => {        
        this.userProfile.child(authenticatedUser.uid).set(
          user
        ); 
         
         this.inserUserImage(file,authenticatedUser.uid);
      });
    });

  }

   getUsers(email: string, password: string): any {
     let usersRef = firebase.database().ref('users');
      return usersRef.orderByValue().on("value", function (snapshot) {
            var userList = [];
            snapshot.forEach((item) => {
                userList.push(item.val());
                return false;
            });      
            return userList;     
        });
  }

  signUpUser(account: {}): any {
    return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
      //
      this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
        this.userProfile.child(authenticatedUser.uid).set(
          account
        );
      });
    });

  }
}
