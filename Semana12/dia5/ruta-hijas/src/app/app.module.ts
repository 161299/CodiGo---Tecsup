import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { AdminComponent } from './components/admin/admin.component';
import { InvitadoHomeComponent } from './components/invitado-home/invitado-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { InvitadoPortafolioComponent } from './components/invitado-portafolio/invitado-portafolio.component';
import { AdminPerfilComponent } from './components/admin-perfil/admin-perfil.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitadoComponent,
    AdminComponent,
    InvitadoHomeComponent,
    AdminHomeComponent,
    InvitadoPortafolioComponent,
    AdminPerfilComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
