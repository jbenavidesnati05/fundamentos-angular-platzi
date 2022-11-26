import { Component} from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent  {

btnDisabled = true
nameFull= "Jorge Benavides Nati"
age=50

// objeto
person ={
  name:"nicolas",
  edad :20,
  avatar:"https://source.unsplash.com/random"
}
}
