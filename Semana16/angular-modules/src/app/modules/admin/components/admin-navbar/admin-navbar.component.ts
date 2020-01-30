import { Component, OnInit } from '@angular/core';
declare let $: any

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    $('#sidebar').toggleClass('active');
  }

}
