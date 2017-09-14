import { Component, OnInit, OnDestroy } from '@angular/core';
import { MathService } from "app/common/services/math.service";

@Component({
  selector: 'calculation-chain',
  templateUrl: './calculation-chain.component.html'
})
export class CalculationChainComponent implements OnInit, OnDestroy {

  private calculations;
  private pointer: number = -1;
  public calculation: string[];
  public calculationInput: number[];

  constructor(private mathSvc: MathService) { }

  public calculate(nbr: number):void{
    let calculation = this.calculations[this.pointer];
    for(let i = 0; i < this.calculationInput.length; i++) {
      calculation = calculation.replace('?', '' + this.calculationInput[i]) 
    }
    if(calculation.indexOf('?') == -1 && this.mathSvc.evaluateMathematicalExpression(calculation)) {
      this.next();
    }
  }

  public next(): void {
    if(++this.pointer < this.calculations.length) { 
      const calculation = this.calculations[this.pointer];
      if(this.mathSvc.isMathematicalExpression(calculation)) {
        this.calculation = this.calculations[this.pointer].replace(/\d/g, ($1: string) => ' ' + $1 + ' ').split('?');
        this.calculationInput = new Array(this.calculation.length - 1);
      } else {
        alert('Invalid mathematical expression: ' + calculation);
      }
    } else {
      alert('Finished');
    }
  }

  public onKeyUp(event: KeyboardEvent): void {
    if(event.code == 'Enter') {
      this.next();
    }
  }

  ngOnInit() {
    this.calculations = this.mathSvc.getExercice('calculationChain', 1)
    this.next();
  }

  ngOnDestroy() {
    
  }

}
