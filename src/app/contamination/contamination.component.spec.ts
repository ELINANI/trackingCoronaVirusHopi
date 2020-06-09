import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminationComponent } from './contamination.component';

describe('ContaminationComponent', () => {
  let component: ContaminationComponent;
  let fixture: ComponentFixture<ContaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
