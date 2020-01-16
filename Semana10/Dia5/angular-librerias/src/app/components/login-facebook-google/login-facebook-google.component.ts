import { AuthService, SocialUser} from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login-facebook-google',
  templateUrl: './login-facebook-google.component.html',
  styleUrls: ['./login-facebook-google.component.css']
})
export class LoginFacebookGoogleComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(public _sAuthService: AuthService) { }

  ngOnInit() {
    this._sAuthService.authState.subscribe((user)=>{
      this.user = user;
      console.log(this.user);
      
      this.loggedIn = (user != null)
    })
  }

  signInWithGoogle(){
    this._sAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(){
    this._sAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(){
    this._sAuthService.signOut();
  }

}
