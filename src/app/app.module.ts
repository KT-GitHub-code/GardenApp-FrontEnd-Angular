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

@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    PlantComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        RouterLink,
        RouterLinkActive,
        RoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
