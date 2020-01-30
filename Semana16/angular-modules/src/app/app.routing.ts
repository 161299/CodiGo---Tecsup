import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', component: AppHomeComponent },
    {path: 'invitado', loadChildren: './modules/invitado/invitado.module#InvitadoModule'  },
    {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'  },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


