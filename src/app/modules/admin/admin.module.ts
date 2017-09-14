import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { StudentSmallComponent } from './components/student-small/student-small.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    NewStudentComponent,
    StudentsComponent,
    StudentComponent,
    StudentSmallComponent
  ],
  providers: []
})
export class AdminModule { }