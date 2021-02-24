import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutadmin',
  templateUrl: './logoutadmin.component.html',
  styleUrls: ['./logoutadmin.component.css']
})
export class LogoutadminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.logout();
    this.router.navigate(['loginadmin']);
  }

  logout() {
    sessionStorage.removeItem('username')
  }

}
