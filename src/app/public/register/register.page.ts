
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';

  constructor(public authService :AuthService) { }

  ngOnInit() {
  }

  register(form){
    console.log(JSON.stringify(form.value));
    this.authService.doRegister(form.value)
     .then(res => {
       this.errorMessage = "";
       this.successMessage = "Your account has been created. Please log in now.";
     }, err => {
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }

}
