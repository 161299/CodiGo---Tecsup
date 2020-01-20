import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _sWebSocket: SocketService) { }

  ngOnInit() {

    this._sWebSocket.escucharChat().subscribe((dataChat: any)=>{
      console.log(dataChat); 
    })

  }


  guardarUsername(username){
    let user = username.value
    console.log(user);
    localStorage.setItem('username', user)
    
  }

  crearUsername(msn){
    let use = localStorage.getItem('username')
    console.log(use);
    console.log(msn.value);
    
    
    let objUsername = {
      username: use,
      mensaje: msn.value
    }

    this._sWebSocket.agregarChat(objUsername);
  }

}
