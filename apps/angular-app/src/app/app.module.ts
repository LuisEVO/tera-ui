import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TeraSDModule } from '@tera-sd/angular';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TeraSDModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
