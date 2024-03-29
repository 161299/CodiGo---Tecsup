import { TemplateForms2Component } from './components/template-forms2/template-forms2.component';
import { ProductoComponent } from './components/productos/producto.component';
import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';

// Modulo para consumir datos externos AJAX
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
// Modulo para usar formularios en Angular
import { FormsModule } from '@angular/forms';
import { TemplateForms3Component } from './components/template-forms3/template-forms3.component';
import { TemplateForms4Component } from './components/template-forms4/template-forms4.component';
import { ProductoEditarComponent } from './components/productos/producto-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductosComponent,
    ProductoComponent,
    TemplateFormsComponent,
    TemplateForms2Component,
    TemplateForms3Component,
    TemplateForms4Component,
    ProductoEditarComponent
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
