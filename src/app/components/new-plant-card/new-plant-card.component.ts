import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-new-plant-card',
  templateUrl: './new-plant-card.component.html',
  styleUrls: ['./new-plant-card.component.css']
})
export class NewPlantCardComponent {

  @Input()
  plantType: string;

}
