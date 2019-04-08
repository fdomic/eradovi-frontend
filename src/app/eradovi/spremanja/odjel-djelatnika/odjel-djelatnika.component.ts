import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-odjel-djelatnika',
  templateUrl: './odjel-djelatnika.component.html',
  styleUrls: ['./odjel-djelatnika.component.scss']
})
export class OdjelDjelatnikaComponent  {
  public myForm: FormGroup;

  public odjeli: Array<any> = [];
  public djelatnici: Array<any> = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService) {
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
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }
   
public createMessage(type: string): void {

  if(type === 'success' ) {
    this.message.create(type, `Uspjesno je spremljen odjel djelatnika`);
  }
  else {
    this.message.create(type, `Spremanje nije uspjelo`);
  }

}

}
