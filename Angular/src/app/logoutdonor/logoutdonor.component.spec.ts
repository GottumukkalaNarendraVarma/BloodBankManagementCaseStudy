import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutdonorComponent } from './logoutdonor.component';

describe('LogoutdonorComponent', () => {
  let component: LogoutdonorComponent;
  let fixture: ComponentFixture<LogoutdonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutdonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
