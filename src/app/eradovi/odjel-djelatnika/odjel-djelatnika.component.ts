import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-odjel-djelatnika',
  templateUrl: './odjel-djelatnika.component.html',
  styleUrls: ['./odjel-djelatnika.component.scss']
})
export class OdjelDjelatnikaComponent  {
  public myForm: FormGroup;

  public odjeli: Array<any> = [];
  public djelatnici: Array<any> = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
    this.dohvatiOdjel();
    this.dohvatijDjelatnika();
  }

  private dohvatiOdjel(): void {
    this.apiService.dohvatiOdjel().subscribe(
      response => this.odjeli = response.data,

      error => console.log(error)
    );
  }

  private dohvatijDjelatnika(): void {
    this.apiService.dohvatijDjelatnika().subscribe(
      response => this.djelatnici = response.data,

      error => console.log(error)
    );
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
   
      odjel_id: '',
      djelatnik_id:'',
      naziv: ''
    });
  }

  
// ========= HTML METODE =========
  public kreirajOdjelDjelatnika(): void {
    
    this.apiService.kreirajOdjelDjelatnika(this.myForm.value.odjel_id ,this.myForm.value.djelatnik_id, this.myForm.value.naziv ).subscribe(
      response => console.log(response),

      error => console.log(error)
    );
  }

}
