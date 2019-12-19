import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
     {path: '' , component: HomeComponent},
     {path: 'home', component: HomeComponent},
     { path: '**', redirectTo: ''}               
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class RoutingModule { }