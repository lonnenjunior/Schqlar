import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math.component';
import { CalculationChainComponent } from "./components/calculation-chain/calculation-chain.component";
import { MathService } from "app/common/services/math.service";

@NgModule({
  imports: [
    CommonModule,
    MathRoutingModule,
    FormsModule
  ],
  declarations: [
    MathComponent,
    CalculationChainComponent
  ],
  providers: [MathService]
})
export class MathModule { }
