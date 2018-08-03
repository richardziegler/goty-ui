import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallotComponent } from './components/ballot/ballot.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GotyMaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    BallotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GotyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
