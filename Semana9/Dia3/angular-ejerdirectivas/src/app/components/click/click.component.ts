import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  tipoAlerta:string = 'alert-success';
  
  cambiarDanger(){
    this.tipoAlerta= 'alert-danger';
  }

  cambiarPrimary(){
    this.tipoAlerta = 'alert-primary';
  }
  constructor() { }

  ngOnInit() {
  }

}
