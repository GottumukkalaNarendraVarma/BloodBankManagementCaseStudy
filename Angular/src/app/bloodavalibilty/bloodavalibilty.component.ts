import { Component, OnInit } from '@angular/core';
import { BloodAvalibility } from '../bloodavalibilty';
import { DonorService } from '../donor.service';
import { Donor } from '../donor';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bloodavalibilty',
  templateUrl: './bloodavalibilty.component.html',
  styleUrls: ['./bloodavalibilty.component.css']
})
export class BloodavalibiltyComponent implements OnInit {
  donors: Observable<Donor>;
  bloodgroup: string;
  bloodavalibilty: BloodAvalibility = new BloodAvalibility();
  submitted = false;
  id: number;

  constructor(private donorservice: DonorService, private route: Router) { }

  ngOnInit(): void {
    //his.reloadData();
  }
  onSubmit() {

    this.donorservice.getDonorByBlood(this.bloodgroup)
      .subscribe(
        data => {
          console.log(data);
          this.donors = data;
          this.submitted = true;
        }
      );
  }

}
