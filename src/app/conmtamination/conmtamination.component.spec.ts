import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConmtaminationComponent } from './conmtamination.component';

describe('ConmtaminationComponent', () => {
  let component: ConmtaminationComponent;
  let fixture: ComponentFixture<ConmtaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConmtaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConmtaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
