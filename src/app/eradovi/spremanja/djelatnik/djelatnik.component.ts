import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-djelatnik',
  templateUrl: './djelatnik.component.html',
  styleUrls: ['./djelatnik.component.scss']
})
export class DjelatnikComponent  {

  
  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService ) {
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
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

  
  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je spremljen djelatnik`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  }
}
