import { ProductoService } from './../../services/producto.service';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  // public options: Options;

  categorias;
  cat_id: 100;

  constructor(public _sCategorias: CategoriaService,
              public _sProducto: ProductoService) { }

  ngOnInit() {
    this.getCategorias();
    
  }

  getCategorias(){
    this._sCategorias.getCategorias().subscribe((data: any) => {
      if (data.ok){
        this.categorias = data.content;
        let tmp = [];
        tmp.push({
          id: 100,
          text: "Seleccione..."
        })
        this.categorias.forEach((cat) => {
          let objCategoria = {
            id: cat.cat_id,
            text: cat.cat_desc
          };
          tmp.push(objCategoria);
        });
        this.exampleData = tmp;
      }
    });
  }

  cambiarSelect(evento){
    this.cat_id = evento;
  }

  crearProducto(formulario: NgForm){
    let objProducto = {
      ...formulario.value,
      categoria: this.cat_id
    }
    this._sProducto.crearProducto(objProducto).subscribe((data) => {
      console.log("Creado con exito");
      console.log(data);
      
      
    })
    
    
    
  }



}
