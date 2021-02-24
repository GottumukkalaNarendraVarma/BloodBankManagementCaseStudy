import { Component, OnInit, Input } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
 
@Component({
  selector: 'app-requestersuccess',
  templateUrl: './donorsuccess.component.html',
  styleUrls: ['./donorsuccess.component.css']
})
export class DonorsuccessComponent implements OnInit {
  userid:number;

  username:string;
 
  constructor(private donorservice:DonorService) { }
 
  ngOnInit(): void {
    this.reloadData();
  }
 reloadData(){
   let donorId=localStorage.getItem("donorId");
   let username=localStorage.getItem("username");
   console.log(donorId);
   this.userid=(+donorId);
   this.username=(username);
  }
 
}
