import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

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

  constructor(private apiService: ApiService, private router: Router) {

    let token = localStorage.getItem("AUTH_TOKEN");
    if(token) {
      this.router.navigate(['e-radovi']);
    }

  }

  onSubmit() {

    return this.apiService.login(this.form.email, this.form.password).subscribe(
      response => {
        console.log(response);
        if(response && response.token) {
          localStorage.setItem("AUTH_TOKEN", response.token);
        }
        this.router.navigate(['e-radovi']);
      },
      error => console.log(error)
    );
  }


  ngOnInit() {}
}
