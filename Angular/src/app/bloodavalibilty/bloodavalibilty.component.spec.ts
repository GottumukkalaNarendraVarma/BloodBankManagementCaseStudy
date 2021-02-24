import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodavalibiltyComponent } from './bloodavalibilty.component';

describe('BloodavalibiltyComponent', () => {
  let component: BloodavalibiltyComponent;
  let fixture: ComponentFixture<BloodavalibiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodavalibiltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodavalibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
