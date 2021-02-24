import { Component, OnInit } from '@angular/core';
import { DonateBlood } from '../DonateBlood';
import { DonatebloodService } from '../donateblood.service';


@Component({
  selector: 'app-donateblood',
  templateUrl: './donateblood.component.html',
  styleUrls: ['./donateblood.component.css']
})
export class DonatebloodComponent implements OnInit {

  donateBlood: DonateBlood = new DonateBlood();

  submitted = false;


  constructor(private donateBloodService: DonatebloodService) { }

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
        },
        error => console.log(error));
    this.donateBlood = new DonateBlood();
  }
  
  onSubmit() {
    this.save();
  }
}