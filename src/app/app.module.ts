import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: 'DOCUMENT', useValue: Document}],
  bootstrap: [AppComponent]
})
export class AppModule { }
