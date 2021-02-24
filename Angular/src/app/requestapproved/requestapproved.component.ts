import { Component, OnInit } from '@angular/core';
import { RequestBloodService } from '../request-blood.service';
import { Observable } from 'rxjs';
import { RequestBlood } from '../RequestBlood';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestapproved',
  templateUrl: './requestapproved.component.html',
  styleUrls: ['./requestapproved.component.css']
})
export class RequestapprovedComponent implements OnInit {

  p: Number = 1;
  count: Number = 3;

  requests: Observable<RequestBlood>;

  request = new RequestBlood();

  constructor(private requestBloodService: RequestBloodService, private route:Router) { }

  ngOnInit(): void {
    this.approveRequest();
  }
  approveRequest() {
    let requesterId = localStorage.getItem("requesterId")

    console.log(requesterId);



    this.requestBloodService.updateRequest(+requesterId)

      .subscribe(data => {

        console.log(data);

        this.request = data;

        this.route.navigate(['requesters'])
      })
  }


}
