import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseUserModel } from './user.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public platform: Platform
  ) { }

  isAuthenticated() {
    return new Promise<any>((resolve, reject) => {
      if(firebase.auth().currentUser){
        resolve(true);
      }
      else {
        reject(false);
      }
    })
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
   }

   doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
   }
 
   doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
    });
   }

}

