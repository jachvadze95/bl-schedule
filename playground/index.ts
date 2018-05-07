/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { ScheduleModule }  from 'bl-schedule';

@Component({
  selector: 'app',
  template: `<schedule-component></schedule-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [BrowserModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
