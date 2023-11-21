import {Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {GlobalService} from "../../services/global.service";
import {Router} from "@angular/router";
import {GardenService} from "../../services/garden.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient,
              private globalService: GlobalService,
              private router: Router,
              private gardenService: GardenService) {
  }

  username: string;
  password: string;

  @ViewChild('loginForm') form: NgForm;

  OnLoginFormSubmitted() {
    this.username = this.form.value.username;
    this.password = this.form.value.password;

    this.form.reset();

    this.http.post('http://localhost:9000/api/auth/authenticate',
      JSON.stringify({ username: this.username, password: this.password }),
      {headers: { 'Content-Type': 'application/json' }, withCredentials: true})
      .subscribe((res)=>{
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.globalService.isUserLoggedIn=true;
        this.globalService.getUserId(this.username);
        this.gardenService.getGarden();
      });

    if(this.gardenService.garden==null){
      this.gardenService.createGarden();
    }

    this.router.navigate(['Garden']);
  }
}
