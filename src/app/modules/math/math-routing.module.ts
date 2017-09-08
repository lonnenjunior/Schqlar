import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculationChainComponent} from './calculation-chain/calculation-chain.component';
import { MathComponent } from "./math.component";

const routes: Routes = [
  {path: 'math/calculation-chain', component: CalculationChainComponent},
  {path: 'math', component: MathComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MathRoutingModule { }