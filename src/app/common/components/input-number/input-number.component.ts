import { Component, Output, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit{
  private nbrValue: number = 0;

  @Input()
  get nbr(): number {
    return this.nbrValue;
  }

  @Output() numberChange = new EventEmitter();
  constructor() { }

  set nbr(nbr: number) {
    this.nbrValue = nbr;
    if(this.nbrValue) {
      this.numberChange.emit(this.nbrValue);
    }
  }

  onChange(nbr: string): void {
    if(nbr)
      this.nbr = Number(nbr);
  }

  ngOnInit(): void {
    console.log('Hier');
  }

}
