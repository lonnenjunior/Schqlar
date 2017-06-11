import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScoolarComponent } from './scoolar.component';
import { ScoolarRoutingModule } from './scoolar-routing.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MathModule } from "app/modules/math/math.module";
import { InputNumberComponent } from './common/components/input-number/input-number.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MathModule,
    ScoolarRoutingModule
  ],
  declarations: [
    ScoolarComponent,
    PageNotFoundComponent,
    InputNumberComponent
  ],
  providers: [],
  bootstrap: [ScoolarComponent]
})
export class ScoolarModule { }
