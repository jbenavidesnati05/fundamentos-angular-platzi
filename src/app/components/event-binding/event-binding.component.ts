import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{


  btnDisabled = true;
  activo = false;
  desactivado = true;
  edadActual = 19;

  activarDesactivar(){
    this.btnDisabled = !this.btnDisabled
    this.activo = !this.activo
    this.desactivado = !this.desactivado

  }

  sumarEdad(){
    this.edadActual = this.edadActual +1
  }

  restarEdad(){
    this.edadActual = this.edadActual -1
  }
}
