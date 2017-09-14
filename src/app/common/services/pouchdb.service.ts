import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { IQuery } from 'app/models/iQuery';
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

  public post(doc: object): Observable<any> {
    return Observable.fromPromise(this.pouchdb.post(doc))
  }

  public get(id: string): Observable<any>{
    return Observable.fromPromise(this.pouchdb.get(id));
  }

  public query(query: string): Observable<IQuery>{
    return Observable.fromPromise(this.pouchdb.query(query));
  }

  public allDocs(): Observable<any>{
    return Observable.fromPromise(this.pouchdb.allDocs({include_docs: true}));
  }
}
