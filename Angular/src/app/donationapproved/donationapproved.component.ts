import { Component, OnInit } from '@angular/core';
import { DonatebloodService } from '../donateblood.service';
import { Router } from '@angular/router';
import { DonateBlood } from '../DonateBlood';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donationapproved',
  templateUrl: './donationapproved.component.html',
  styleUrls: ['./donationapproved.component.css']
})
export class DonationapprovedComponent implements OnInit {

  p: Number = 1;
  count: Number = 3;

  donors: Observable<DonateBlood>;

  donations = new DonateBlood();

  constructor(private donateBloodService:DonatebloodService,private route:Router) { }

  ngOnInit(): void {
    this.approveDonation();
  }

  approveDonation() {

    let donorId=localStorage.getItem("donorId")

    console.log("hiii");

    console.log(donorId)


    this.donateBloodService.updateDonation(+donorId)

      .subscribe(data => {

        console.log(data);

        this.donations = data;

        this.route.navigate(['donors'])

      })


  }



}
