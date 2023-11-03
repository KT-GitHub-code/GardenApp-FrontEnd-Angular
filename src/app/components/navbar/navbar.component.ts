import { Component } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public globalService: GlobalService) {
  }

  logout() {
    this.globalService.userLoggedIn=false;
  }
}
