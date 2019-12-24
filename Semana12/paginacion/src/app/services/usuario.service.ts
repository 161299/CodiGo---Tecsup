import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public _sHttp: HttpClient) { }

  getUsuario() {
    return this._sHttp.get('http://localhost:3000/usuarios');
  }

  getUsuariodesde(desde){
    return this._sHttp.get(`http://localhost:3000/usuarios?desde=${desde}`)
  }
}
