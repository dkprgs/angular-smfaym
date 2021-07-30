import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { StatePersistingService } from './state-persisting.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [StatePersistingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
