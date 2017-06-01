import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scoolar.component.html'
})
export class ScoolarComponent {
  categories: string[];
  constructor() { 
    this.categories = [
      'Math',
      'French',
      'Deutsch'
    ];
  }
}
