import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFacebookGoogleComponent } from './components/login-facebook-google/login-facebook-google.component';

// librerias - calendarios
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ChartsComponent } from './components/charts/charts.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";




// Inicializando

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    CalendarioComponent,
    ChartsComponent,
    LoginFacebookGoogleComponent,
  
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ScheduleModule,
    ChartsModule,
    SocialLoginModule,
    
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
