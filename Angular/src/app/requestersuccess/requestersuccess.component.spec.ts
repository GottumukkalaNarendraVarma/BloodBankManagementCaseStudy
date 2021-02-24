import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestersuccessComponent } from './requestersuccess.component';

describe('RequestersuccessComponent', () => {
  let component: RequestersuccessComponent;
  let fixture: ComponentFixture<RequestersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
