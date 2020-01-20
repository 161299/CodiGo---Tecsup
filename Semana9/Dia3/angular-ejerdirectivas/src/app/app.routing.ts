import { ClickComponent } from './components/click/click.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import { HomeComponent} from './components/home/home.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "ngclass", component: NgclassComponent },
  { path: "ngclick", component: ClickComponent },
  { path: "ngstyle", component: NgstyleComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}