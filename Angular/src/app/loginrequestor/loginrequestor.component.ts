import { Component, OnInit } from '@angular/core';
import { RequestorauthenticationService } from '../requestorauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginrequestor',
  templateUrl: './loginrequestor.component.html',
  styleUrls: ['./loginrequestor.component.css']
})
export class LoginrequestorComponent implements OnInit {

  constructor(private requestorService: RequestorauthenticationService, private router: Router) { }
  requesterId: number;
  invalidLogin = false;
  ngOnInit(): void {
  }
  checkLoginRequestor() {
    this.requestorService.authenticateRequestor(this.requesterId).subscribe(
      data => {
        //localStorage.setItem("requestId", data.requestId.toString());
        //console.log(data.requestId);
        this.router.navigate(['request']);

      },

      error => console.log(error));
      this.router.navigate(['pnfrequester'])
  }

}