import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatingbloodComponent } from './donatingblood.component';

describe('DonatingbloodComponent', () => {
  let component: DonatingbloodComponent;
  let fixture: ComponentFixture<DonatingbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatingbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatingbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
