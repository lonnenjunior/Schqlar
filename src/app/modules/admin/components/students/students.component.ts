import { Component, OnInit } from '@angular/core';
import { PouchdbService } from "app/common/services/pouchdb.service";
import { Student } from "app/models/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  constructor(private pouchdbSvc: PouchdbService) { }

  ngOnInit() {
    this.pouchdbSvc.query('students/all').subscribe(({rows}) => {
      this.students = rows.map(function(row){
        const student = <Student>row.key;
        (student.comments || []).forEach( (comment) => { comment.credatim = new Date(comment.credatim);})
        return student;
      })
    });
  }

}
