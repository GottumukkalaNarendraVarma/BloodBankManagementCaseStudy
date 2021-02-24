import { Component, OnInit } from '@angular/core';
import { DonatebloodService } from '../donateblood.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonateBlood } from '../DonateBlood';

@Component({
  selector: 'app-donationrejected',
  templateUrl: './donationrejected.component.html',
  styleUrls: ['./donationrejected.component.css']
})
export class DonationrejectedComponent implements OnInit {

  p: Number = 1;
  count: Number = 3;

  donors: Observable<DonateBlood>;

  donations = new DonateBlood();


  constructor(private donateBloodService:DonatebloodService,private route:Router) { }

  ngOnInit(): void {
    this.rejectDonation();
  }

  rejectDonation() {

    let donorId = localStorage.getItem("donorId")

    console.log("hiii");

    console.log(donorId);



    this.donateBloodService.modifyDonation(+donorId)

      .subscribe(data => {

        console.log(data);

        this.donations = data;

        this.route.navigate(['donors'])

      })


  }


}
