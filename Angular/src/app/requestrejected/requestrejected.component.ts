import { Component, OnInit } from '@angular/core';
import { RequestBloodService } from '../request-blood.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestBlood } from '../RequestBlood';

@Component({
  selector: 'app-requestrejected',
  templateUrl: './requestrejected.component.html',
  styleUrls: ['./requestrejected.component.css']
})
export class RequestrejectedComponent implements OnInit {

  p: Number = 1;
  count: Number = 3;

  requests: Observable<RequestBlood>;

  request = new RequestBlood();

  constructor(private requestBloodService:RequestBloodService,private route:Router) { }

  ngOnInit(): void {
    this.rejectRequest()
  }

  rejectRequest() {
    let requesterId = localStorage.getItem("requesterId")

    console.log(requesterId);

    this.requestBloodService.modifyRequest(+requesterId)

      .subscribe(data => {

        console.log(data);

        this.request = data;

        this.route.navigate(['requesters'])
      })
    }

}
