import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailAddress: string = '';
  emailPassword: string = '';

  constructor(private route: Router, private loginService: LoginService){

  }


  login(){
    if(this.loginService.login(this.emailAddress, this. emailPassword)){
      console.log("Success")
      this.route.navigate(['/rooms', 'add']);
    }
  }

}
