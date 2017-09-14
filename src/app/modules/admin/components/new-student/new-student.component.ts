import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PouchdbService } from 'app/common/services/pouchdb.service';
import { Student } from 'app/models/student';

@Component({
  selector: 'admin-new-student',
  templateUrl: './new-student.component.html'
})
export class NewStudentComponent implements OnInit {
  private birthdateRegexp: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  private newStudentForm: FormGroup;
 
  constructor(private fb: FormBuilder, private pouchdbSvc: PouchdbService) { 
    this.newStudentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      birthdate: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.birthdateRegexp)]],
      address: '',
      locality: '',
      phone: ''
    });
  }

  public onSubmit(): void {
    const newStudent: Student = Object.assign({}, this.newStudentForm.value);
    newStudent.type = 'Student';
    // newStudent._id = new Date().toISOString();
    this.pouchdbSvc.put(newStudent);
  }

  public get firstname() { return this.newStudentForm.get('firstname'); }
  public get lastname() { return this.newStudentForm.get('lastname'); }
  public get birthdate() { return this.newStudentForm.get('birthdate'); }
  public get address() { return this.newStudentForm.get('address'); }
  public get locality() { return this.newStudentForm.get('locality'); }
  public get phone() { return this.newStudentForm.get('phone'); }

  ngOnInit() { }

}
