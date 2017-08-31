import { Component } from '@angular/core';
import { PouchdbService } from "app/common/services/pouchdb.service";

declare var PouchDB: any;

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
  isLoggedIn: boolean = false;
  constructor(private pouchSvc: PouchdbService) {
    this.categories = [
      {name: 'Math', link: 'math'},
      {name: 'French', link: 'french'},
      {name: 'German', link: 'german'},
      {name: 'Admin', link: 'admin'},
    ];

    // pouchSvc.put({'_id': 'test', 'name': 'obo'})
    pouchSvc.get('test').subscribe((doc) => {
      console.log(doc);
    })

  }
}
