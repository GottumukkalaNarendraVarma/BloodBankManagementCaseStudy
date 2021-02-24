import { Component, OnInit } from '@angular/core';
import { DonatebloodService } from '../donateblood.service';
import { DonateBlood } from '../DonateBlood';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent implements OnInit {

  donations:Observable<DonateBlood>

  donorId:number;


  constructor(private donateBloodService:DonatebloodService,private route:Router) { }

  p: number=1;
  count: number=3;


  ngOnInit(): void {
    this.viewDonations()
  }

  viewDonations() {
    this.donations=this.donateBloodService.getDonations();
  }

  approveDonation(donation: DonateBlood) {

    console.log("hiii");

    localStorage.setItem("donorId", donation.donorId.toString());

    let donorId = localStorage.getItem("donorId")

    this.route.navigate(['correct'])

    console.log(donorId);

    console.log(donorId);



    this.donateBloodService.updateDonation(+donorId)

      .subscribe(data => {

        console.log(data);

        this.donations = data;

      })


  }

  rejectDonation(donation: DonateBlood) {

    console.log("hiii");

    localStorage.setItem("donorId", donation.donorId.toString());

    this.route.navigate(['mistake'])

    let donorId = localStorage.getItem("donorId")

    console.log(donorId);



    this.donateBloodService.modifyDonation(+donorId)

      .subscribe(data => {

        console.log(data);

        this.donations = data;

      })


  }


}
