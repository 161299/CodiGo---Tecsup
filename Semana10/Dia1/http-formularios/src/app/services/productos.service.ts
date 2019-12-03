import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  backendUrl = env.backendUrl;

  constructor(public _sHttp: HttpClient) { };

  getProductos() {
    let url = `${this.backendUrl}/canchitas/all`;
    return this._sHttp.get(url);
  }
}
