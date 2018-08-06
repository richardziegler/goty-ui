import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallotComponent } from './components/ballot/ballot.component';
import { HomeComponent } from './components/home/home.component';
import { NominationFormComponent } from './components/nomination-form/nomination-form.component';

const routes: Routes = [
  { path: 'ballot', component: BallotComponent },
  {path: '', component: HomeComponent},
  {path: 'nominate', component: NominationFormComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

