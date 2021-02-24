import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestBlood } from '../RequestBlood';
import { RequestBloodService } from '../request-blood.service';
 
@Component({
  selector: 'app-checkingstatus',
  templateUrl: './checkingstatus.component.html',
  styleUrls: ['./checkingstatus.component.css']
})
export class CheckingstatusComponent implements OnInit {
 
  requests:RequestBlood=new RequestBlood();
 
  constructor(private requestBloodService:RequestBloodService) { }
 
  ngOnInit(): void {
    this.getRequestorStatus();
  }
  getRequestorStatus() {
    console.log("hiii come coem")
    let id = localStorage.getItem("requesterId");
    console.log(id);
    let requesterId=((+id))
    console.log(requesterId)
    this.requestBloodService.getRequesterById(requesterId)
      .subscribe(
        data => {
          console.log(data);
          this.requests = data;
 
        })
      }
  }