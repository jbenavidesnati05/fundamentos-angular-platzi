interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})



export class InterpolationComponent implements OnInit {

  name:string = "juan"
  img:string = "https://source.unsplash.com/random"
  messure:number = 100
  edad:number = 19;
  n1:number = 50;
  n2:number = 20;
  suma = this.n1+this.n2;
  // creacion de objeto
  planetas:Planet=
    {
      name: "tierra",
      galaxy: "via lactea",
      numberOfMoons: 2,
      weight: 1900,

    }

  constructor() { }

  ngOnInit(): void {
  }

}
