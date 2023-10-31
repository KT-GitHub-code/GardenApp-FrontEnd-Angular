import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plant} from "../models/plant";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }

  getPlants() {
    console.log("Fetching plants from PlantService.");
    // this.http.get('http://localhost:9000/api/plantsbygardenid/1')
    this.http.get('https://gardenapp-iddqd-default-rtdb.europe-west1.firebasedatabase.app/plants.json')
      .subscribe((res)=>{console.log(res);});

  }

  postDummyPlants() {
    console.log("Posting dummy plants.");
    const plants: Plant[] = [{id:1,type:'aloe',gardenId:1}, {id:2,type:'sedum',gardenId:1}];
    this.http.post('https://gardenapp-iddqd-default-rtdb.europe-west1.firebasedatabase.app/plants.json', plants)
      .subscribe();
  }
}
