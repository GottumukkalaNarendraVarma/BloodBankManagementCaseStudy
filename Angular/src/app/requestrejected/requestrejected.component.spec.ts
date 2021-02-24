import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestrejectedComponent } from './requestrejected.component';

describe('RequestrejectedComponent', () => {
  let component: RequestrejectedComponent;
  let fixture: ComponentFixture<RequestrejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestrejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
