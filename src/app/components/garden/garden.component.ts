import {Component, OnInit} from '@angular/core';
import {Plant} from "../../models/plant";
import {PlantService} from "../../services/plant.service";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit{

  constructor(private plantService: PlantService) {
  }

  plants: Plant[] = [];

  ngOnInit() {

    this.fetchPlants();

  }

  private fetchPlants(): void {
    this.plants = this.plantService.getPlants();
  }

}
