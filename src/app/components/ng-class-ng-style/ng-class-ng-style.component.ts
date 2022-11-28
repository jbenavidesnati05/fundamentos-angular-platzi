import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-ng-style',
  templateUrl: './ng-class-ng-style.component.html',
  styleUrls: ['./ng-class-ng-style.component.css']
})
export class NgClassNgStyleComponent implements OnInit {

  person = {
    name:"jorge",
    lastname:"benavides",
    age: 18,
    telefono: "3103917469"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
