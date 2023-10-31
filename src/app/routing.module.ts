import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GardenComponent} from "./components/garden/garden.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RegistrationComponent} from "./components/registration/registration.component";


// ROUTES
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Garden', component: GardenComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class RoutingModule{

}
