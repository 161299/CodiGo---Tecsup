import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;

  constructor(public _sActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.subscriptor =  this._sActivatedRoute.params.subscribe((parametros: Params) =>{
      console.log('Esta entrando una nueva ruta');
       
      console.log(parametros.cancha_id);
       
     },(error)=>{
       console.log(error);
       
     })
    
    console.log("buscador aqui");
  
  }

  ngOnDestroy(): void {
    this.subscriptor.unsubscribe();
    
  }


}
