import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-fakultet",
  templateUrl: "./fakultet.component.html",
  styleUrls: ["./fakultet.component.scss"]
})
export class FakultetComponent {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
  }
  
  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      naziv: ""
    });
  }

  // ========= HTML METODE =========

  public kreirajFakultet(): void {
    this.apiService.kreirajFakultet(this.myForm.value.naziv).subscribe(
      response => console.log(response),

      error => console.log(error)
    );
  }
}
