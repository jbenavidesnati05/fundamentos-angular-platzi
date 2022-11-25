import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
