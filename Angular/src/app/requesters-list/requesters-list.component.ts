import { Component, OnInit } from '@angular/core';
import { RequestBloodService } from '../request-blood.service';
import { Observable } from 'rxjs';
import { RequestBlood } from '../RequestBlood';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requesters-list',
  templateUrl: './requesters-list.component.html',
  styleUrls: ['./requesters-list.component.css']
})
export class RequestersListComponent implements OnInit {

  constructor(private requestBloodService: RequestBloodService, private route:Router) { }

  p: Number = 1;
  count: Number = 3;

  requests: Observable<RequestBlood>;

  requesterId:number;


  ngOnInit(): void {
    this.viewRequests()
  }

  viewRequests() {
    this.requests = this.requestBloodService.getRequests();
  }

  approveRequest(request:RequestBlood) {

    console.log("hiii");

    localStorage.setItem("requesterId", request.requesterId.toString());

    this.route.navigate(['right']);

  }

    /*let requesterId = localStorage.getItem("requesterId")

    console.log(requesterId);



    this.requestBloodService.updateRequest(+requesterId)

      .subscribe(data => {

        console.log(data);

        this.requests = data;

      })


  }*/

  rejectRequest(request: RequestBlood) {

    console.log("hiii");

    localStorage.setItem("requesterId", request.requesterId.toString());

    this.route.navigate(['wrong'])

    let requesterId = localStorage.getItem("requesterId")

    console.log(requesterId);



    this.requestBloodService.modifyRequest(+requesterId)

      .subscribe(data => {

        console.log(data);

        this.requests = data;

      })


  }



}
