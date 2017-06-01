import { Component } from '@angular/core';

class Category {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './scoolar.component.html'
})
export class ScoolarComponent {
  categories: Category[];
  constructor() { 
    this.categories = [
      {name: 'Math', link: 'math'},
      {name: 'French', link: 'french'},
      {name: 'German', link: 'german'}
    ];
  }
}
