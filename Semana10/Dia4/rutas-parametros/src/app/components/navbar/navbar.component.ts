import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _sRouter: Router) { }

  ngOnInit() {
  }

  buscar(idbuscado: FormControl){
    // console.log(idbuscado.value);
    this._sRouter.navigate(['/buscador',idbuscado.value])
  }
}
