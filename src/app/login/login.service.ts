import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string){
    if(email === 'test@gmail.com' && password === 'Rufiyan'){
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
