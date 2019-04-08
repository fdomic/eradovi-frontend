import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-djelatnik',
  templateUrl: './djelatnik.component.html',
  styleUrls: ['./djelatnik.component.scss']
})
export class DjelatnikComponent  {

  
  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
  }
  
  private kreirajFormu(): void {
    this.myForm = this.fb.group({

      
        name:'',
        email:'',
        password:'',
        ime: '',
        prezime: '',
        oib: '',
        jmbag:''

    });
  }

  // ========= HTML METODE =========

  public kreirajDjelatnika(): void {
    this.apiService.kreirajDjelatnika( this.myForm.value.name, this.myForm.value.email , this.myForm.value.password , this.myForm.value.ime , this.myForm.value.prezime , this.myForm.value.oib, this.myForm.value.jmbag ).subscribe(
      response => console.log(response),

      error => console.log(error)
    );
  }
}
