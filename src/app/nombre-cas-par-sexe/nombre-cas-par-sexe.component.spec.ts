import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreCasParSexeComponent } from './nombre-cas-par-sexe.component';

describe('NombreCasParSexeComponent', () => {
  let component: NombreCasParSexeComponent;
  let fixture: ComponentFixture<NombreCasParSexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreCasParSexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreCasParSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
