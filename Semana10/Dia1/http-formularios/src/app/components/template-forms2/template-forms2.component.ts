import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms2',
  templateUrl: './template-forms2.component.html',
  styleUrls: ['./template-forms2.component.css']
})
export class TemplateForms2Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  registrar(formulario: NgForm){
    
    console.log(formulario);
    if(formulario.valid){
      console.log(formulario.value);
      
    }
    
  }

  // formulario2(pais: FormControl, edad: FormControl, nombre: FormControl, email: FormControl) {
  //   console.log(pais);
  //   console.log(edad);
  //   console.log(nombre);
  //   console.log(email);
  // }
}
