import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'dallas/:id/:view',component: DallasComponent},
  { path: 'dc',component: DcComponent },
  { path: 'chicago',component: ChicagoComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/dallas' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: DallasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
