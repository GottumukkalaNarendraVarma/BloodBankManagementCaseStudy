import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingstatusComponent } from './checkingstatus.component';

describe('CheckingstatusComponent', () => {
  let component: CheckingstatusComponent;
  let fixture: ComponentFixture<CheckingstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
