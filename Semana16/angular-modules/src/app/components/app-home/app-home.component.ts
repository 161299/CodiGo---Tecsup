import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
  /* styleUrls: ['./app.component.scss'] */
})
export class AppHomeComponent implements OnInit {

  constructor(private _sRouter: Router) { }

  ngOnInit() {
  }

  goInvitado(){
    this._sRouter.navigate(['/invitado'])
  }

  goAdmin(){
    this._sRouter.navigate(['/admin'])
  }

}
