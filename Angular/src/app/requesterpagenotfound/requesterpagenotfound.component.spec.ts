import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterpagenotfoundComponent } from './requesterpagenotfound.component';

describe('RequesterpagenotfoundComponent', () => {
  let component: RequesterpagenotfoundComponent;
  let fixture: ComponentFixture<RequesterpagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterpagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterpagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
