import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-odjel',
  templateUrl: './odjel.component.html',
  styleUrls: ['./odjel.component.scss']
})
export class OdjelComponent {
  
  public myForm: FormGroup;

  public fakulteti: Array<any> = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
    this.dohvatiFakultete();
  }

  private dohvatiFakultete(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

      error => console.log(error)
    );
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
   
      fakultet_id: '',
      naziv: ''
    });
  }

  
// ========= HTML METODE =========
  public kreirajOdjel(): void {
    
    this.apiService.kreirajOdjel(this.myForm.value.fakultet_id , this.myForm.value.naziv ).subscribe(
      response => console.log(response),

      error => console.log(error)
    );
  }


}
