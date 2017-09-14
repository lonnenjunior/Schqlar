import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path: 'admin/student/:id', component: StudentComponent},
  {path: 'admin/students', component: StudentsComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }