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

  plants: Plant[] = [
    // {id: 1, type: 'aloe', gardenId: 1},
    // {id: 2, type: 'sedum', gardenId: 1},
    // {id: 3, type: 'senecio', gardenId: 1},
    // {id: 4, type: 'crassula', gardenId: 1},
  ];

  ngOnInit() {

    this.postDummyPlants();
    this.fetchPlants();

  }

  private fetchPlants() {
    this.plantService.getPlants();
  }

  private postDummyPlants() {
    this.plantService.postDummyPlants();
  }
}
