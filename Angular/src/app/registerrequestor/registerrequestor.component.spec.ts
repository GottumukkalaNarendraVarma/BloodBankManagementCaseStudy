import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrequestorComponent } from './registerrequestor.component';

describe('RegisterrequestorComponent', () => {
  let component: RegisterrequestorComponent;
  let fixture: ComponentFixture<RegisterrequestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterrequestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterrequestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
