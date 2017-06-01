import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CalculationTableComponent } from './components/math/calculation-table/calculation-table.component';
import { CalculationChainComponent } from './components/math/calculation-chain/calculation-chain.component';
import { TimerComponent } from './components/utils/timer/timer.component';
import { MathComponent } from './components/math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculationTableComponent,
    CalculationChainComponent,
    TimerComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'math/calculation-table',
      component: CalculationTableComponent
    },
    {
      path: 'math/:component/:id',
      component: MathComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
