import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingdonationComponent } from './checkingdonation.component';

describe('CheckingdonationComponent', () => {
  let component: CheckingdonationComponent;
  let fixture: ComponentFixture<CheckingdonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingdonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
