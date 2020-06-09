import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdContaminationComponent } from './curd-contamination.component';

describe('CurdContaminationComponent', () => {
  let component: CurdContaminationComponent;
  let fixture: ComponentFixture<CurdContaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdContaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdContaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
