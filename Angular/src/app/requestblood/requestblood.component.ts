import { Component, OnInit } from '@angular/core';
import { RequestBlood } from '../RequestBlood';
import { RequestBloodService } from '../request-blood.service';

@Component({
  selector: 'app-requestblood',
  templateUrl: './requestblood.component.html',
  styleUrls: ['./requestblood.component.css']
})
export class RequestbloodComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }


}
