import { Component, OnInit } from '@angular/core';

    const CALCULATIONS: string[] = [
      '1 + ? = 3',
      '4 + ? = 8',
      '3 + ? = 10',
      '1 + ? = 2',
      '1 + ? = 1',
      '1 + ? = 8'
    ];

@Component({
  selector: 'calculation-chain',
  templateUrl: './calculation-chain.component.html'
})
export class CalculationChainComponent implements OnInit {
  
  calculations = CALCULATIONS;
  pointer: number = -1;
  calculation: string[];

  constructor() { }

  next(): void {
    this.pointer++;
    this.calculation = [];
    var str = "";
    this.calculations[this.pointer].split(' ').forEach(position => {
      if(position == '?') {
        this.calculation.push(str);
        str = "";
        this.calculation.push('');
      } else {
        str += position + ' '
      }
    });
    this.calculation.push(str);
  }

  ngOnInit() {
    this.next();
  }

  typeof(element): any {
    return typeof element;
  }

}
