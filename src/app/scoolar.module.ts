import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScoolarComponent } from './scoolar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScoolarRoutingModule } from './scoolar-routing.module';

@NgModule({
  declarations: [
    ScoolarComponent,
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
