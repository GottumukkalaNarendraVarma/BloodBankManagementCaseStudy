import { Component, OnInit } from '@angular/core';
import { RequestBlood } from '../RequestBlood';
import { Observable } from 'rxjs';
import { RequestBloodService } from '../request-blood.service';

@Component({
  selector: 'app-approverequest',
  templateUrl: './approverequest.component.html',
  styleUrls: ['./approverequest.component.css']
})
export class ApproverequestComponent implements OnInit {

  requests: Observable<RequestBlood>;

  constructor(private requestBloodService: RequestBloodService) { }

  ngOnInit(): void {
    this.viewRequests()
  }

  viewRequests() {
    this.requests = this.requestBloodService.getRequests();
  }

}
