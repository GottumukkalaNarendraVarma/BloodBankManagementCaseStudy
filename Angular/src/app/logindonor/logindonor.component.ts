import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DonorAuthenticationService } from '../donorauthentication.service';

@Component({
  selector: 'app-logindonor',
  templateUrl: './logindonor.component.html',
  styleUrls: ['./logindonor.component.css']
})
export class LoginDonorComponent implements OnInit {
  donorId: number;
  invalidLogin = false;

  constructor(private loginService: DonorAuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin() {
    this.loginService.authenticate(this.donorId).subscribe(
      data => {
        this.router.navigate(['donate']);
        this.invalidLogin = false
      },
      error => console.log(error));
      this.router.navigate(['pnfdonor'])
  }
}