import {Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private http: HttpClient, private router: Router) {
  }

  username: string;
  password: string;

  @ViewChild('registrationForm') form: NgForm;

  OnRegistrationFormSubmitted() {
    this.username = this.form.value.username;
    this.password = this.form.value.password;

    this.form.reset();

    this.http.post('http://localhost:9000/api/auth/register',
      JSON.stringify({ username: this.username, password: this.password }),
      {headers: { 'Content-Type': 'application/json' }, withCredentials: true})
      .subscribe((res)=>{console.log(res);});
    console.log("Registration submitted");
    this.router.navigate(['Login']);
  }
}
