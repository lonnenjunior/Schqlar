import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'app/models/student';

@Component({
  selector: 'student-small',
  templateUrl: './student-small.component.html'
})
export class StudentSmallComponent implements OnInit {

  @Input()
  public student: Student;
  constructor() { }

  ngOnInit() {
  }

}
