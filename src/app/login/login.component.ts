import { Component, OnInit } from "@angular/core";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: "filip@unipu.hr",
    password: "filip"
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {

    return this.apiService.login(this.form.email, this.form.password).subscribe(
      response => {
        console.log(response);
        if(response && response.token) {
          localStorage.setItem("AUTH_TOKEN", response.token);
        }
        this.router.navigate(['navigation'])
      },
      error => console.log(error)
    );
  }


  ngOnInit() {}
}
