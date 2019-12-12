import { iLocal } from './../../interfaces/iLocal';
import { Component, OnInit , OnDestroy} from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {
  subscriptor: Subscription;
  listaLocales: Array<iLocal>;
  cargando = true
  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
    this.traerProductos();
    
  }

  traerProductos(){
    
    this.subscriptor = this._sProductos.getProductos().subscribe((data:any)=>{
      this.listaLocales = data
      this.cargando = true;
      console.log(this.listaLocales);
      
    },(error:any)=>{ 
      console.log(error);
      
    })
    
  
  }
 
  ngOnDestroy(){
    this.subscriptor.unsubscribe();
  }

  abrirModalCrearProducto(){
    $("#ModalCrearProducto").modal("show")
  }

  crearProducto(formularioCrear: NgForm){
    
    if(formularioCrear.valid){
      console.log(formularioCrear.value); 
      this._sProductos.postProducto(formularioCrear.value).subscribe((rpta: any) => { 
        console.log(rpta);
        if(rpta.id){
          this.traerProductos();
          this.cargando = false;
          this.cancelar(formularioCrear);
        }
        
      }, ( error: any) => {
        console.log(error);
        
       } );   
    }  

  }
  cancelar(formularioCrear: NgForm){
    formularioCrear.reset();
    $("#ModalCrearProducto").modal("hide")
  }

}
