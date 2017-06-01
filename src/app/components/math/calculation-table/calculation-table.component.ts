import { Component, OnInit } from '@angular/core';

const CALCTABLE:string = `
  1+?=2
  + +
  ?-1=1
  = = 
  3 2
`

@Component({
  selector: 'app-calculation-table',
  templateUrl: './calculation-table.component.html'
})
export class CalculationTableComponent implements OnInit {
  calctable = CALCTABLE;
  constructor() {

   }

  ngOnInit() {
  }

}
