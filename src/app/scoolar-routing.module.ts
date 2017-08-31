import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { WelcomeComponent } from "app/common/components/welcome/welcome.component";
import { LoginComponent } from "app/common/components/login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ScoolarRoutingModule { }
