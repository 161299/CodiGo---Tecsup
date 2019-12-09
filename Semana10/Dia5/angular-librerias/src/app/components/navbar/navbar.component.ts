import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser} from "angularx-social-login";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private _sAuthService: AuthService) { }

  ngOnInit() {
    this._sAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });
  }

}
