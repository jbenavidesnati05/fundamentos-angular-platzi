import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  nombre = "";
  primerNumero = 0;
  segundoNumero = 0;
  edad = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
