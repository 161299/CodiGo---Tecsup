import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log('constructor');
    // Funcion que se ejecuta cuando un componente va a aparecer
    // Ejm > Esta función debe ser utilizada para inicializar variables por ejemplo.
  }

  ngOnInit() {
    console.log('ngOnInit');
    // Función que se ejecuta luego que el DOM del componente, se haya cargado
    // Ejm > Esta función debe ser usada para manipular elementos del DOM porque si lo manipulamos en el constructor, se generará un error, ya que en el constructor, el DOM, aún no existe
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    // Función que se ejecuta cuando un componente va a desaparecer del DOM actual
    // Ejm> Ésta función debe ser usada para limpiar la memoria ocupada por algunas variables. cancelar eventos de subscripción, etc.
  }
}
