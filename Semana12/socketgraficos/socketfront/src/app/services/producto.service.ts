import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public _sHttp: HttpClient) { }

  crearProducto(objProducto){
    let miHeaders = new HttpHeaders();
    miHeaders.append('Content-type', 'application/json');
    return this._sHttp.post('http://localhost:3000/producto', objProducto, { headers: miHeaders});
  }

  getPpCategoria(){
    return this._sHttp.get('http://localhost:3000/reportes/ppcategoria');
  }
}  
