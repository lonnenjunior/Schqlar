import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math/math.component';

@NgModule({
  imports: [
    CommonModule,
    MathRoutingModule
  ],
  declarations: [MathComponent]
})
export class MathModule { }
