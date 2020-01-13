import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  conectado: boolean = false;

  constructor(private _sSocket: Socket) {
    this.chequearEstado();
   };

   chequearEstado(){
     this._sSocket.on('connect', (mensaje: any)=>{
       console.log('Socket conectado');
       console.log(mensaje);
       this.conectado = true;
     });

     this._sSocket.on('disconnect', (mensaje: any)=>{
       console.log('socket desconectado');
       
       console.log(mensaje);
       this.conectado = false;
     })
   }

   pedirChat(){
    this._sSocket.emit('pedir-chat');
   };

   escucharChat(objChat){
    return this._sSocket.fromEvent('pedir-chat', objChat)
   };

   agregarChat(objChat){
    return this._sSocket.emit('agregar-chat', objChat)
   }

}
