import {Component, OnInit} from '@angular/core';
import {PlantService} from "../../services/plant.service";
import {GardenService} from "../../services/garden.service";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit{

  constructor(
    public gardenService: GardenService,
    public plantService: PlantService
  ) {
  }


  ngOnInit() {

    this.fetchGarden();
    this.fetchPlants();
  }

  private fetchPlants(): void {
    this.plantService.getPlants();
  }

  private fetchGarden(): void {
    this.gardenService.getGarden();
  }

}
