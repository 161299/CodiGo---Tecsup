import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _sWebSocket: WebsocketService) { }

  ngOnInit() {

    this._sWebSocket.escucharProductos().subscribe((dataProducto: any) => {
      console.log(dataProducto);
    });
    // this._sWebSocket.pedirProductos();
  }

  crearProducto(idProducto, nombreProducto){
    let objProducto: Object = {
      id: idProducto.value,
      nombre: nombreProducto.value
    };
    this._sWebSocket.agregarProducto(objProducto);
    
  }

}
