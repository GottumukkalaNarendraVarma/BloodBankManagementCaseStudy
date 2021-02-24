import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestapprovedComponent } from './requestapproved.component';

describe('RequestapprovedComponent', () => {
  let component: RequestapprovedComponent;
  let fixture: ComponentFixture<RequestapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
