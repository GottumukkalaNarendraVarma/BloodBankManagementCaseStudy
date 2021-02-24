import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrequestorComponent } from './loginrequestor.component';

describe('LoginrequestorComponent', () => {
  let component: LoginrequestorComponent;
  let fixture: ComponentFixture<LoginrequestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrequestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrequestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
