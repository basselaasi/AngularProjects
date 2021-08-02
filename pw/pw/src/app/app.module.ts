import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
