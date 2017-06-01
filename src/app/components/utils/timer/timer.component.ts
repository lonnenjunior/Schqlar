import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
  
  remainingTime: number;
  @Input() timeLimit: number = 30;

  constructor() { }

  ngOnInit() {
    this.timeLimit *= 100
    this.remainingTime = this.timeLimit;
    setInterval(( )=> {
      const interval = this.remainingTime -= 1;
      if(this.remainingTime <= 0) {
          clearInterval(interval);
      }
    }, 10);
  }

}
