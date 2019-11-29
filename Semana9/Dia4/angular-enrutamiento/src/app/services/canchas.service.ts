import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  arrayCanchas: Array<any> = [
    {
      id: 1,
      nombre: 'Jarawa',
      direccion: 'Av. Dolores'
    },

    {
      id: 2,
      nombre: 'Bola 8',
      direccion: 'Av. Parra'
    }
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
