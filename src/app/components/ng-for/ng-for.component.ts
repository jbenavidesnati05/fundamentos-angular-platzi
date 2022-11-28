import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  names: string[]=["nico","juli","santi"]
  newName:string = "";

  addName(){
    if (this.newName ==""){
      alert("debe ingresar un nombre")

      }else {
        this.names.push(this.newName);
          this.newName= "";
      }
    }

  deleteName(index:number){
    this.names.splice(index,1)
  }

}
