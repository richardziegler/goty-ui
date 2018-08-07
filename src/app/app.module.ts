import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BallotComponent } from './components/ballot/ballot.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GotyMaterialModule } from './material';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NominationFormComponent } from './components/nomination-form/nomination-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BallotComponent,
    HomeComponent,
    NominationFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GotyMaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
