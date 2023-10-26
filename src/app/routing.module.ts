import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GardenComponent} from "./components/garden/garden.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";


// ROUTES
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Garden', component: GardenComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class RoutingModule{

}
