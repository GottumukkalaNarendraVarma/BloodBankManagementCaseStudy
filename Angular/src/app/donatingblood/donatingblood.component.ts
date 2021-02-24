import { Component, OnInit } from '@angular/core';
import { DonateBlood } from '../DonateBlood';
import { DonatebloodService } from '../donateblood.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-donatingblood',
  templateUrl: './donatingblood.component.html',
  styleUrls: ['./donatingblood.component.css']
})
export class DonatingbloodComponent implements OnInit {
 
  donateBlood: DonateBlood = new DonateBlood();
 
  submitted = false;
 
  constructor(private donateBloodService: DonatebloodService,private router:Router) { }
 
  newDonateBlood(): void {
    this.submitted = false;
    this.donateBlood = new DonateBlood();
  }
 
  ngOnInit(): void {
  }
 
  save() {
    this.donateBloodService.donateBlood(this.donateBlood)
      .subscribe(
        data => {
          console.log(data);
         
          this.submitted = true;
          localStorage.setItem("donorId",data.donorId.toString());
          this.router.navigate(['logindonor']);
        },
        error => console.log(error));
    this.donateBlood = new DonateBlood();
  }
 
  onSubmit() {
    this.save();
  }
 
}