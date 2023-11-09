import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-garden-checker',
  templateUrl: './garden-checker.component.html',
  styleUrls: ['./garden-checker.component.css']
})
export class GardenCheckerComponent {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  createGarden() {
    this.http.post('http://localhost:9000/api/garden',
      JSON.stringify({ }),
      {headers: { Authorization: 'Bearer '+ this.token,'Content-Type': 'application/json' }, withCredentials: true}
    )
      .subscribe((res)=>{console.log(res);});

  }

}