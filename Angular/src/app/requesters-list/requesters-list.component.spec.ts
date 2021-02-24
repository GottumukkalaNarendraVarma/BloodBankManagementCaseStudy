import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestersListComponent } from './requesters-list.component';

describe('RequestersListComponent', () => {
  let component: RequestersListComponent;
  let fixture: ComponentFixture<RequestersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
