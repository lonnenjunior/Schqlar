import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
declare var PouchDB;

@Injectable()
export class PouchdbService {

  private pouchdb;

  constructor() {
    this.pouchdb = new PouchDB('http://localhost:5984/scoolar');
  }

  public put(doc: object): Subject<any> {
    const subj: Subject<any> = new Subject();
    this.pouchdb.put(doc).then((doc) => {
      subj.next(doc);
    })
    return subj;
  }

  public get(id: string): Subject<any>{
    const subj: Subject<any> = new Subject();
    this.pouchdb.get(id).then((doc) => {
      subj.next(doc);
    })
    return subj;
  }
}
