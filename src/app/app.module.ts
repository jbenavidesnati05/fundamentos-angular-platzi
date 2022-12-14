import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgForObjectsComponent } from './components/ng-for-objects/ng-for-objects.component';
import { NgClassNgStyleComponent } from './components/ng-class-ng-style/ng-class-ng-style.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    NgModelComponent,
    NgIfComponent,
    NgForComponent,
    NgForObjectsComponent,
    NgClassNgStyleComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
