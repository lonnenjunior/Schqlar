import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MathComponent } from "app/modules/math/math.component";

const routes: Routes = [
  {path: 'math', component: MathComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ScoolarRoutingModule { }
