import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorpagenotfoundComponent } from './donorpagenotfound.component';

describe('DonorpagenotfoundComponent', () => {
  let component: DonorpagenotfoundComponent;
  let fixture: ComponentFixture<DonorpagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorpagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorpagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
