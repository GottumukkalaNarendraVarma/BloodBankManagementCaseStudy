import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  verify(username, password) {

    //database logic

    if (username === "admin" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }

  }

}
