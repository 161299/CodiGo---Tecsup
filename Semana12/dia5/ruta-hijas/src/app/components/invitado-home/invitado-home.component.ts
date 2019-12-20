import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitado-home',
  templateUrl: './invitado-home.component.html',
  styleUrls: ['./invitado-home.component.css']
})
export class InvitadoHomeComponent implements OnInit {

  constructor(private _sRouter: Router) { }

  ngOnInit() { 

  }

  irPortafolio(){
    this._sRouter.navigate(['/portafolio']);
  }

}
