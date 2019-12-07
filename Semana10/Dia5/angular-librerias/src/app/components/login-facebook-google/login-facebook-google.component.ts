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

  constructor(public _authService: AuthService) { }

  ngOnInit() {
    this._authService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user != null)
    })
  }

  signInWithGoogle(){
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(){
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(){
    this._authService.signOut();
  }

}
