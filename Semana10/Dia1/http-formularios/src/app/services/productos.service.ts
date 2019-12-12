import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "./../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  public abrir = false;
  public objProductoEditar = {
    tamanio: "",
    foto: "",
    tipo: 0,
    local: 0,
    id: 0
  };
  backendUrl = env.backendUrl;

  constructor(public _sHttp: HttpClient) {}

  getProductos() {
    let url = `${this.backendUrl}/canchitas/all`;
    return this._sHttp.get(url);
  }

  postProducto(objLocal: {
    tamanio: string;
    foto: string;
    local: number;
    tipo: number;
  }) {
    let url = `${this.backendUrl}/canchita/add`;
    let misHeaders = new HttpHeaders();
    misHeaders.append("Content-Type", "application/json");

    return this._sHttp.post(url, objLocal, { headers: misHeaders });
  }

  putProducto(objLocal, id) {
    let url = `${this.backendUrl}/canchita/buscar/${id}`;
    let misHeaders = new HttpHeaders();
    misHeaders.append("Content-Type", "application/json");
    return this._sHttp.put(url, objLocal, { headers: misHeaders });
  }
}
