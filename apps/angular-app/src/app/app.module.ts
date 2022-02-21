import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignSystemAngularModule } from '@tera-sd/angular';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DesignSystemAngularModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
