import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PouchdbService } from 'app/common/services/pouchdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  private studentForm: FormGroup;

  public student: Student;
  constructor(private fb: FormBuilder, private pouchdbSvc: PouchdbService, private router: Router, private route: ActivatedRoute) {
    this.student = new Student();
    this.studentForm = this.fb.group(this.student);
    for(let key in Student.validators) {
      this.studentForm.controls[key].setValidators(Student.validators[key]);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if(id == 'new'){
        this.student = new Student();
        this.studentForm.patchValue(this.student)
      } else {
          this.pouchdbSvc.get(params.id).subscribe((student) => {
            this.student = new Student(student);
            this.studentForm.patchValue(this.student)
          });
      }
   });
  }

  public onSubmit(): void {
    const student = new Student(this.studentForm.getRawValue());
    this.pouchdbSvc.put(student).subscribe(() => {
      this.router.navigate(['admin/students']);
    });
  }

  public get firstname() { return this.studentForm.get('firstname'); }
  public get lastname() { return this.studentForm.get('lastname'); }
  public get birthdate() { return this.studentForm.get('birthdate'); }
  public get address() { return this.studentForm.get('address'); }
  public get locality() { return this.studentForm.get('locality'); }
  public get phone() { return this.studentForm.get('phone'); }


}
