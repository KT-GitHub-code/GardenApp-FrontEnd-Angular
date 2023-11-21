import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _isUserLoggedIn:boolean = false;
  private _currentUserId:number;
  private token:string = localStorage.getItem('token');

  constructor(private http: HttpClient) { }


  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  set isUserLoggedIn(value: boolean) {
    this._isUserLoggedIn = value;
  }


  get currentUserId(): number {
    return this._currentUserId;
  }

  set currentUserId(value: number) {
    this._currentUserId = value;
  }

  getUserId(username: string) {
    this.http.get('http://localhost:9000/api/user/'+username,
      {
        headers: {Authorization: 'Bearer '+ this.token, 'Content-Type': 'application/json'},
        withCredentials: true
      }
    )
      .subscribe((res) => {
        // console.log(res);
        this._currentUserId = res['id'];
      });
  }

}
