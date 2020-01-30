import { InvitadoHomeComponent } from './screens/invitado-home/invitado-home.component';
import { InvitadoProyectosComponent } from './screens/invitado-proyectos/invitado-proyectos.component';
import { InvitadoContactoComponent } from './screens/invitado-contacto/invitado-contacto.component';
import { InvitadoNosotrosComponent } from './screens/invitado-nosotros/invitado-nosotros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitadoComponent } from './invitado.component';


const routes: Routes = [
  { path: '', 
    component: InvitadoComponent,
    children: [
      {path: '', component: InvitadoHomeComponent},
      {path: 'nosotros', component: InvitadoNosotrosComponent},
      {path: 'contacto', component: InvitadoContactoComponent},
      {path: 'proyectos', component: InvitadoProyectosComponent},
      {path: '**', redirectTo: ''}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
