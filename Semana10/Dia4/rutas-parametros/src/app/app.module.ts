import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductoVerComponent } from './components/producto-ver/producto-ver.component';
import { CanchasComponent } from './components/canchas/canchas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { ProhibidoComponent } from './components/prohibido/prohibido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductoVerComponent,
    CanchasComponent,
    BuscadorComponent,
    ProtegidoComponent,
    ProhibidoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
