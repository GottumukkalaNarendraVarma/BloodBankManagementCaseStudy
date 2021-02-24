import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationapprovedComponent } from './donationapproved.component';

describe('DonationapprovedComponent', () => {
  let component: DonationapprovedComponent;
  let fixture: ComponentFixture<DonationapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
