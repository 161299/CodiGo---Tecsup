import { ProhibidoComponent } from './components/prohibido/prohibido.component';
import { GuardianService } from './guards/guardian.service';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { CanchasComponent } from './components/canchas/canchas.component';
import { ProductoVerComponent } from './components/producto-ver/producto-ver.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "canchas", component: CanchasComponent },
  { path: "cancha/:cancha_id", component: ProductoVerComponent },
  { path: "buscador/:cancha_id", component: BuscadorComponent },
  { path: "protegido", component: ProtegidoComponent, canActivate: [GuardianService] },
  { path: "prohibido", component: ProhibidoComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true})],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}