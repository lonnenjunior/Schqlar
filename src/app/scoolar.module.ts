import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScoolarComponent } from './scoolar.component';
import { ScoolarRoutingModule } from './scoolar-routing.module';

import { WelcomeComponent } from './common/components/welcome/welcome.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { MathModule } from "app/modules/math/math.module";

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
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [ScoolarComponent]
})
export class ScoolarModule { }
