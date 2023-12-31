import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plant} from "../models/plant";
import {map} from "rxjs";
import {GlobalService} from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  private token:string = localStorage.getItem('token');
  plants: Plant[];

  getPlants(): void {
    console.log("Fetching plants from PlantService.");
    let plants: Plant[] = [];
    this.http.get('http://localhost:9000/api/plantsbygardenid/'+this.globalService.currentUserId,
      {
        headers: {Authorization: 'Bearer '+ this.token, 'Content-Type': 'application/json'},
        withCredentials: true
      })
      .pipe(map((res)=>{
        // @ts-ignore
        for (let p of res){
          plants.push(p)
        }
      }))
      .subscribe();
    this.plants = plants;
  }

}
