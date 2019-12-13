import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductoService } from 'src/app/service/producto.service';
@Component({
  selector: 'app-producto-ver',
  templateUrl: './producto-ver.component.html',
  styleUrls: ['./producto-ver.component.css']
})
export class ProductoVerComponent implements OnInit {

  objCancha: any;

  constructor(public _sActivatedRoute: ActivatedRoute,
              public _sCancha: ProductoService        ) { }

  ngOnInit() {
    console.log(this._sActivatedRoute);
    this.traerCancha(this._sActivatedRoute.snapshot.params.cancha_id)
  }

  traerCancha(id){
    this._sCancha.getProductoById(id).subscribe((rpta: any) => {
      console.log(rpta);
      this.objCancha = rpta
    },(error)=>{
      console.log(error);
      
    })
  }


}
