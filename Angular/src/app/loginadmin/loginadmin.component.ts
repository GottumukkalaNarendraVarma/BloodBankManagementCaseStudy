import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {



  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLoginAdmin() {
    if (this.loginService.verify(this.username, this.password)) {
      console.log("came here");
      this.router.navigate(['approve']);
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}