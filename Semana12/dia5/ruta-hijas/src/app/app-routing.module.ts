import { AdminPerfilComponent } from './components/admin-perfil/admin-perfil.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { InvitadoPortafolioComponent } from './components/invitado-portafolio/invitado-portafolio.component';
import { InvitadoHomeComponent } from './components/invitado-home/invitado-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: '', component: InvitadoComponent, 
    children:[
        {path: '', component: InvitadoHomeComponent},
        {path: 'portafolio', component: InvitadoPortafolioComponent}
    ]},

  {path: 'admin', component: AdminComponent,
  children:[
      {path: '', component: AdminHomeComponent},
      {path: 'perfil', component: AdminPerfilComponent}
    ]},
  {path: '**', redirectTo: ''}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
