import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminPerfilComponent } from './screen/admin-perfil/admin-perfil.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminPerfilComponent,
    AdminNavbarComponent, 

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
