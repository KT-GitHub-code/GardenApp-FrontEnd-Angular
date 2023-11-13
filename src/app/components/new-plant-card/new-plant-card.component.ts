import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GardenService} from "../../services/garden.service";

@Component({
  selector: 'app-new-plant-card',
  templateUrl: './new-plant-card.component.html',
  styleUrls: ['./new-plant-card.component.css']
})
export class NewPlantCardComponent {

  @Input()
  plantType: string;

  token = localStorage.getItem('token');

  @Output() plantAdditionSuccessEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient,
              private gardenService: GardenService) {
  }

  createPlant() {
    this.http.post('http://localhost:9000/api/plant',
      {
        "type": this.plantType,
        "gardenId": this.gardenService.garden.id
      },
      {headers: { Authorization: 'Bearer '+ this.token,'Content-Type': 'application/json' }, withCredentials: true}
    )
      .subscribe();
    this.emitPlantAdditionSuccess(true);
  }

  emitPlantAdditionSuccess(value: boolean){
    this.plantAdditionSuccessEvent.emit(value);
  }

}
