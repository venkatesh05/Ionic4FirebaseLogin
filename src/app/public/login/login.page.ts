import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  errorMessage: string = '';

  constructor(public authService: AuthService,
    public router : Router) {}

  ionViewWillLoad(){
  }

  login(form){
    this.authService.doLogin(form.value)
    .then(res => {
      console.log(res);
      this.router.navigateByUrl('home/dashboard');
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  
}
