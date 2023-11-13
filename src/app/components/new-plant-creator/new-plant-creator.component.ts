import { Component } from '@angular/core';

@Component({
  selector: 'app-new-plant-creator',
  templateUrl: './new-plant-creator.component.html',
  styleUrls: ['./new-plant-creator.component.css']
})
export class NewPlantCreatorComponent {

  plantTypes: string[] = [
    "AEONIUM",
    "AGAVE",
    "ALOE",
    "CRASSULA",
    "ECHEVERIA",
    "EUPHORBIA",
    "GASTERIA",
    "GRAPTOPETALUM",
    "HAWORTHIA",
    "KALANCHOE",
    "MAMMILLARIA",
    "OPUNTIA",
    "SEDUM",
    "SEMPERVIVUM",
    "SENECIO"
  ];

  plantAddedSuccess: boolean = false;

  plantAddedType: string;

  receivePlantAdditionSuccess($event, type){
    this.plantAddedSuccess = $event;
    this.plantAddedType = type;
  }

}
