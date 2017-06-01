import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationChainComponent } from './calculation-chain.component';

describe('CalculationChainComponent', () => {
  let component: CalculationChainComponent;
  let fixture: ComponentFixture<CalculationChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
