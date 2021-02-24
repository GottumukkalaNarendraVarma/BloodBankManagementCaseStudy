import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdonor',
  templateUrl: './registerdonor.component.html',
  styleUrls: ['./registerdonor.component.css']
})
export class RegisterdonorComponent implements OnInit {
  donor: Donor = new Donor();
  donorId: number;
  donors: Donor;
  submitted = false;
  constructor(private route: Router, private donorservice: DonorService) { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.save();
  }
  save() {
    this.donorservice.adddonor(this.donor)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.donors = data;
          localStorage.setItem("donorId", this.donors.donorId.toString());
          localStorage.setItem("username", this.donors.username);
          console.log(this.donors.donorId);
          this.route.navigate(["donorsuccess"]);
        },
        error => console.log(error));
  }
}