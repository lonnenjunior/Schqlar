import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationTableComponent } from './calculation-table.component';

describe('CalculationTableComponent', () => {
  let component: CalculationTableComponent;
  let fixture: ComponentFixture<CalculationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
