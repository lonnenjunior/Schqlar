import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathEvaluatorComponent } from './math-evaluator.component';

describe('MathEvaluatorComponent', () => {
  let component: MathEvaluatorComponent;
  let fixture: ComponentFixture<MathEvaluatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathEvaluatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
