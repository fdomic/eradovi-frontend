import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: "",
    password: ""
  };
  

  constructor(private apiService: ApiService, private router: Router,private message: NzMessageService) {

    let token = localStorage.getItem("AUTH_TOKEN");
    if(token) {
      this.router.navigate(['e-radovi']);
    }

  }

  onSubmit() {

    return this.apiService.login(this.form.email, this.form.password).subscribe(
      response => {
        if(response && response.token) {
          localStorage.setItem("AUTH_TOKEN", response.token);

          localStorage.setItem("AUTH_id", response.id.toString());
          localStorage.setItem("AUTH_isProfesor", response.credentials.isProfesor.toString());
          localStorage.setItem("AUTH_isReferada", response.credentials.isReferada.toString());
          localStorage.setItem("AUTH_isStudent", response.credentials.isStudent.toString());
        }
        this.router.navigate(['e-radovi']);
      },
      error => console.log(error,this.createMessage("error"))
    );
  }

  public createMessage(type: string): void {
    if (type === "success") {
      this.message.create(type, `Uspjesno je prijavljen`);
      // e-radovi/dohvati-fakultet
    } else {
      this.message.create(type, `Netočni podatci.Probajte ponovo.`);
    }
  }

  ngOnInit(){}
}
