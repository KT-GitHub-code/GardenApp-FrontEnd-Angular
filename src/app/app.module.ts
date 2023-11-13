import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GardenComponent } from './components/garden/garden.component';
import { PlantComponent } from './components/plant/plant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {RoutingModule} from "./routing.module";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from "./components/registration/registration.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {GardenCheckerComponent} from "./components/garden-checker/garden-checker.component";
import {AddPlantComponent} from "./components/add-plant/add-plant.component";
import {NewPlantCreatorComponent} from "./components/new-plant-creator/new-plant-creator.component";
import {NewPlantCardComponent} from "./components/new-plant-card/new-plant-card.component";
import {PlantAddedComponent} from "./components/plant-added/plant-added.component";

@NgModule({
    declarations: [
        AppComponent,
        GardenComponent,
        PlantComponent,
        NavbarComponent,
        HomeComponent,
        NotFoundComponent,
        RegistrationComponent,
        LoginComponent,
        GardenCheckerComponent,
        AddPlantComponent,
        NewPlantCreatorComponent,
        NewPlantCardComponent,
        PlantAddedComponent
    ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    RoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
