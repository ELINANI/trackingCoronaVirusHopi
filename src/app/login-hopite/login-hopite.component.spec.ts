import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHopiteComponent } from './login-hopite.component';

describe('LoginHopiteComponent', () => {
  let component: LoginHopiteComponent;
  let fixture: ComponentFixture<LoginHopiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHopiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHopiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
