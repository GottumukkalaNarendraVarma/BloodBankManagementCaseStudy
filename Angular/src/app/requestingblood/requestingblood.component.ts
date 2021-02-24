import { Component, OnInit } from '@angular/core';
import { RequestBlood } from '../RequestBlood';
import { RequestBloodService } from '../request-blood.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-requestingblood',
  templateUrl: './requestingblood.component.html',
  styleUrls: ['./requestingblood.component.css']
})
export class RequestingbloodComponent implements OnInit {
 
  requestBlood: RequestBlood = new RequestBlood();
 
  submitted = false;
 
  constructor(private requestBloodService: RequestBloodService, private route:Router) { }
 
  ngOnInit(): void {
  }
 
  newRequestBlood(): void {
    this.submitted = false;
    this.requestBlood = new RequestBlood();
  }
 
  save() {
    this.requestBloodService.createRequest(this.requestBlood)
      .subscribe(
        data => {
          console.log(data);
         
          this.submitted = true;
          localStorage.setItem("requesterId",data.requesterId.toString());
          this.route.navigate(['loginrequestor']);
        },
        error => console.log(error));
    this.requestBlood = new RequestBlood();
  }
 
  onSubmit() {
    this.save();
  }
 
}