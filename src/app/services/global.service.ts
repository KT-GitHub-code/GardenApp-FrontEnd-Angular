import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _userLoggedIn:boolean = false;

  constructor() { }


  get userLoggedIn(): boolean {
    return this._userLoggedIn;
  }

  set userLoggedIn(value: boolean) {
    this._userLoggedIn = value;
  }
}
