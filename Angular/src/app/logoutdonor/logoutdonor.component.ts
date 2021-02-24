import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutdonor',
  templateUrl: './logoutdonor.component.html',
  styleUrls: ['./logoutdonor.component.css']
})
export class LogoutdonorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.logout();
    this.router.navigate(['logindonor']);
  }
  logout() {
    sessionStorage.removeItem('username')
  }

}
