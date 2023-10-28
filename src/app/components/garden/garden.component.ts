import { Component } from '@angular/core';
import {Plant} from "../../models/plant";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent {

  plants: Plant[] = [
    {id: 1, type: 'aloe', gardenId: 1},
    {id: 2, type: 'sedum', gardenId: 1},
    {id: 3, type: 'senecio', gardenId: 1},
    {id: 4, type: 'crassula', gardenId: 1},
  ];

}
