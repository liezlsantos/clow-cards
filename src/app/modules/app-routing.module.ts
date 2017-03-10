import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { DailyReadingComponent }   from '../components/daily-reading.component';
import { ClowCardDetailComponent }  from '../components/clow-card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/daily-reading', pathMatch: 'full' },
  { path: 'daily-reading',  component: DailyReadingComponent },
  { path: 'clow-card/:id', component: ClowCardDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ {provide: APP_BASE_HREF, useValue : '/' } ]
})
export class AppRoutingModule {}
