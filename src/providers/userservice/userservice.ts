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

  inserUserImage(file, userId) {
    var imageRef = this.storageRef.child('profileImages/' + userId);
    imageRef.put(file).then(function (snapshot) { });
  }

  insertUser(user: {}, file: any): any {
    return this.fireAuth.createUserWithEmailAndPassword(user['email'], user['password']).then((newUser) => {
      //
      this.fireAuth.signInWithEmailAndPassword(user['email'], user['password']).then((authenticatedUser) => {
        this.userProfile.child(authenticatedUser.uid).set(
          user
        );

        this.inserUserImage(file, authenticatedUser.uid);
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

  updateUser(user: {}, profileImage): any {
      var updates = {};
      updates['users/' + user['key'] +'/name'] = user['name'];
      updates['users/' + user['key'] +'/email'] = user['email'];
      updates['users/' + user['key'] +'/IDNumber'] = user['IDNumber'];
      updates['users/' + user['key'] +'/cellPhone'] = user['cellPhone'];
      updates['users/' + user['key'] +'/surname'] = user['surname'];
      updates['users/' + user['key'] +'/userType'] = user['userType'];
    if(profileImage != undefined){
      firebase.database().ref().update(updates); 
      return this.inserUserImage(profileImage, user['key'])
    }else{
      return firebase.database().ref().update(updates); 
    }
  }

   approveUser(key: string): any {    
    var updates = {};
    updates['users/' + key +'/isActive'] = true;
    return firebase.database().ref().update(updates);
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
