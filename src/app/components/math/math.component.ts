import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html'
})
export class MathComponent implements OnInit {

  component: string;
  id: number;
  wasStarted: boolean = false;
  constructor(private route: ActivatedRoute, private location: Location) { }

  start(): void {
    this.wasStarted = true;
  }

  ngOnInit() {
    this.route.params
    //.switchMap((params: Params) => params['component'])
    .subscribe(params => {
      this.component = params['component'];
      this.id = params['id'];
    });
  }

}
