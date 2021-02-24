import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsuccessComponent } from './donorsuccess.component';

describe('DonorsuccessComponent', () => {
  let component: DonorsuccessComponent;
  let fixture: ComponentFixture<DonorsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
