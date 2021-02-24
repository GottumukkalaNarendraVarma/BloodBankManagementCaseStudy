import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationrejectedComponent } from './donationrejected.component';

describe('DonationrejectedComponent', () => {
  let component: DonationrejectedComponent;
  let fixture: ComponentFixture<DonationrejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationrejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
