
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanchasService} from './../../services/canchas.service';


@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent implements OnInit, OnDestroy {

  listaCanchas: Array<any> = []

  // la inyteccion por dependencia es incluir a un servicio e constructor de un componente
  constructor(public _sCanchas: CanchasService) { 
    console.log('constructor');
    
  }

  ngOnInit() {
    console.log('ngOnInit');
    
    console.log('Llamando a las canchas');

    // let canchas = this._sCanchas.getCanchas();
    this._sCanchas.getCanchas().then((canchas :any)=>{
      this.listaCanchas = canchas;
    });
    
    
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
