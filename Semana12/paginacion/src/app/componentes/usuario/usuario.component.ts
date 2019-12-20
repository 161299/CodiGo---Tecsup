import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public _sUsuario: UsuarioService) { }

  ngOnInit() {
  }

  getUsuarios(){
    this._sUsuario.getUsuario().subscribe((data: any) => {
      console.log(data.content);
    });
  }

}
