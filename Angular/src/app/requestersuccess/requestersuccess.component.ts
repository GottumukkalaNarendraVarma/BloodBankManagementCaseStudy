import { Component, OnInit, Input } from '@angular/core';
import { Requestor } from '../requestor';
import { Observable } from 'rxjs';
import { RequestorService } from '../requestor.service';

@Component({
  selector: 'app-requestersuccess',
  templateUrl: './requestersuccess.component.html',
  styleUrls: ['./requestersuccess.component.css']
})
export class RequestersuccessComponent implements OnInit {
  userid: number;

  username:string;

  constructor(private requestorservice: RequestorService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    let userid = localStorage.getItem("requesterId");
    let username=localStorage.getItem("username");
    console.log(userid);
    console.log(username);
    this.userid = (+userid);
    this.username=(username);
  }

}
