import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminPerfilComponent } from './screen/admin-perfil/admin-perfil.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {path: '', component: AdminNavbarComponent},
      {path: 'perfil', component: AdminPerfilComponent},
      {path: '**', redirectTo: ''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
