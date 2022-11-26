import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  nombres = ["juan", "andres","jorge","antony"]

  person1={
    nombre:'jorge',
    profesion:"mecanico"
  }
  person2={
    nombre:"juan",
    profesion:"dev"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
