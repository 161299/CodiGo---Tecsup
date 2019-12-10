import { LoginFacebookGoogleComponent } from './components/login-facebook-google/login-facebook-google.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "calendario", component: CalendarioComponent},
  { path: "charts", component: ChartsComponent },
  { path: "login", component: LoginFacebookGoogleComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}