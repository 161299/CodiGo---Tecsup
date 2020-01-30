import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { InvitadoComponent } from './invitado.component';
import { InvitadoHomeComponent } from './screens/invitado-home/invitado-home.component';
import { InvitadoNosotrosComponent } from './screens/invitado-nosotros/invitado-nosotros.component';
import { InvitadoContactoComponent } from './screens/invitado-contacto/invitado-contacto.component';
import { InvitadoProyectosComponent } from './screens/invitado-proyectos/invitado-proyectos.component';
import { InvitadoNavbarComponent } from './components/invitado-navbar/invitado-navbar.component';


@NgModule({
  declarations: [
    InvitadoComponent, 
    InvitadoHomeComponent, 
    InvitadoNosotrosComponent, 
    InvitadoContactoComponent, 
    InvitadoProyectosComponent, InvitadoNavbarComponent, 
  ],
  imports: [
    CommonModule,
    InvitadoRoutingModule
  ]
})
export class InvitadoModule { }
