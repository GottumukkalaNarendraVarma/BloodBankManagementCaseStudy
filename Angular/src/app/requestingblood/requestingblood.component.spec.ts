import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestingbloodComponent } from './requestingblood.component';

describe('RequestingbloodComponent', () => {
  let component: RequestingbloodComponent;
  let fixture: ComponentFixture<RequestingbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestingbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestingbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
