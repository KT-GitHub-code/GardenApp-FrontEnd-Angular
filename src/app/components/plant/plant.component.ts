import {Component, Input} from '@angular/core';
import {Plant} from "../../models/plant";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent {

  @Input()
  plant: Plant;

}
