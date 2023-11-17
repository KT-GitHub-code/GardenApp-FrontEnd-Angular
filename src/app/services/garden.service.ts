import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Garden} from "../models/garden";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  constructor(private http: HttpClient,
              private router: Router) { }

  private token:string = localStorage.getItem('token');
  garden: Garden = null;

  getGarden(): void {
    let g: Garden;
    this.http.get('http://localhost:9000/api/gardens/1',
      {
        headers: {Authorization: 'Bearer '+ this.token, 'Content-Type': 'application/json'},
        withCredentials: true
      }
      )
      .pipe(map((res)=>{
        g = <Garden>res;
        this.garden = g;
      }))
      .subscribe();
  }

  createGarden() {
    this.http.post('http://localhost:9000/api/garden',
      JSON.stringify({ }),
      {headers: { Authorization: 'Bearer '+ this.token,'Content-Type': 'application/json' }, withCredentials: true}
    )
      .subscribe((res)=>{console.log(res);});
    this.router.navigate(['Home']);
  }

}
