import {Component, Input} from '@angular/core';
import {Plant} from "../../models/plant";

@Component({
  selector: 'app-plant-added',
  templateUrl: './plant-added.component.html',
  styleUrls: ['./plant-added.component.css']
})
export class PlantAddedComponent {

  @Input()
  plantType: string;

  plant: Plant;

  plantAddition(): Plant{
    return new Plant(this.plantType);
  }

}
