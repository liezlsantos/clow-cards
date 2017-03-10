import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from '../components/app.component';
import { DailyReadingComponent } from '../components/daily-reading.component';
import { ClowCardDetailComponent } from '../components/clow-card-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DailyReadingComponent,
    ClowCardDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
