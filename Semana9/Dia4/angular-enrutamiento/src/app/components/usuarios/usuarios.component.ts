import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  cargado: boolean = false
  listaUsuarios: Array<any> = [];
  constructor(public _sUsuarios: UsuariosService) { }

  ngOnInit() {
    this._sUsuarios.getUsuarios().then((response)=>{
      return response.json()
    }).then((data:any)=>{
      console.log(data);
    })
  }

}
