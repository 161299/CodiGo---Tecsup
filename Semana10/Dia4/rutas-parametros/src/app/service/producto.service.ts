import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBackend = env.backendUrl;


  constructor(public _sHttp: HttpClient) { }

  getProductoById(id){
    let url = `${this.urlBackend}/canchita/buscar/${id}`;
    return this._sHttp.get(url)
  }

}
