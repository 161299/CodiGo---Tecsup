import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent implements OnInit {

  constructor(public _sRouter: Router) { }

  ngOnInit() {
  }

  verCancha(id){
    this._sRouter.navigate(['/cancha',`${id}`])
  };


}
