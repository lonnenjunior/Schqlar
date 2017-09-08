import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ScoolarComponent } from './scoolar.component';
import { ScoolarRoutingModule } from './scoolar-routing.module';

import { WelcomeComponent } from './common/components/welcome/welcome.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { MathModule } from "app/modules/math/math.module";
import { AdminModule } from "app/modules/admin/admin.module";
import { LoginComponent } from './common/components/login/login.component';
import { PouchdbService } from "app/common/services/pouchdb.service";
import { SubmenuComponent } from './common/components/submenu/submenu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MathModule,
    AdminModule,
    ScoolarRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [
    ScoolarComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    SubmenuComponent
  ],
  providers: [PouchdbService],
  bootstrap: [ScoolarComponent]
})
export class ScoolarModule { }
