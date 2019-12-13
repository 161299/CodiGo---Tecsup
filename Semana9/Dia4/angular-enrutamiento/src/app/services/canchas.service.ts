import { Injectable } from '@angular/core';
import {iCancha} from '../interfaces/iCancha';
@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  arrayCanchas: Array<iCancha> = [
    { id: 1,  nombre: 'Jarawa', direccion: 'Av. Dolores'},

    { id: 2, nombre: 'Bola 8', direccion: 'Av. Parra' }
  ]

  constructor() { 
    console.log('Constructor del servicio de canchas');
    
  }

  getCanchas(){
    return new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve(this.arrayCanchas);
      }, 1500)
    })

    // return this.arrayCanchas;
  }
}
