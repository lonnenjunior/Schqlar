import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'scoolar-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent implements OnInit {

  public menuItems: {link: string[], label: string}[] = []; // Create an interface for menuItems

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.menuItems = [
        {link: ['admin', 'students'], label: 'Students'},
        {link: ['admin', 'results'], label: 'Results'}
      ]
      /*const currentRoute = this.router.url;
      this.menuItems = [
        {link: [currentRoute, 'students'], label: 'Students'},
        {link: [currentRoute, 'results'], label: 'Results'}
      ]*/
    });
  }

}
