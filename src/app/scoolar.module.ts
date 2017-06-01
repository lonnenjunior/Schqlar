import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScoolarComponent } from './scoolar.component';
import { ScoolarRoutingModule } from './scoolar-routing.module';

import { MathComponent } from "app/modules/math/math.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ScoolarComponent,
    MathComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScoolarRoutingModule
  ],
  providers: [],
  bootstrap: [ScoolarComponent]
})
export class ScoolarModule { }
