import { Component, OnInit } from '@angular/core';
import { DonatebloodService } from '../donateblood.service';
import { DonateBlood } from '../DonateBlood';
 
@Component({
  selector: 'app-checkingdonation',
  templateUrl: './checkingdonation.component.html',
  styleUrls: ['./checkingdonation.component.css']
})
export class CheckingdonationComponent implements OnInit {
donate:DonateBlood=new DonateBlood();
  constructor(private donateBloodService:DonatebloodService) { }
 
  ngOnInit(): void {
    this.getdonateStatus();
 
  }
  getdonateStatus(){
    let id = localStorage.getItem("donorId");
    console.log(id);
    let donorId=((+id))
    console.log(donorId)
    this.donateBloodService.getDonorById(donorId)
      .subscribe(
        data => {
          console.log(data);
          this.donate = data;
 
        })
  }
 
}