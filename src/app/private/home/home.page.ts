import { Router, RouterEvent } from '@angular/router';
import { FirebaseUserModel } from './../../core/user.model';
import { AuthService } from './../../core/auth.service';
import { UserService } from './../../core/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel(); 
  selectedPath = '';
 
  pages = [
    {
      title: 'Home',
      url: '/home/dashboard'
    },
    {
      title: 'Movies',
      url: '/home/tabs'
    },
    {
      title: 'Components',
      url: '/home/components'
    }
  ];

  constructor(
    public userService: UserService,
    public authService: AuthService,
    public navCtrl: NavController,
    public router: Router
    ) {
      this.router.events.subscribe((event: RouterEvent) => {
        if (event && event.url) {
          this.selectedPath = event.url;
        }
      });
     }

  ngOnInit() {
    // this.userService.getCurrentUser()
    // .then(user => {
    //   this.user = user;
    // }, err => console.log(err))
  }

  // logout(){
  //   this.authService.doLogout()
  //   .then((res) => {
  //     this.navCtrl.navigateBack('login');
  //   }, (error) => {
  //     console.log("Logout error", error);
  //   });
  // }

  
 

}
