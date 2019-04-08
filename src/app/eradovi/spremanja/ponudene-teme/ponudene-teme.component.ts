import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ponudene-teme',
  templateUrl: './ponudene-teme.component.html',
  styleUrls: ['./ponudene-teme.component.scss']
})
export class PonudeneTemeComponent{

  
  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
  }
  
  private kreirajFormu(): void {
    this.myForm = this.fb.group({
     
      rad_id:'',
      djelatnik_id: '',
      naziv_hr: '',
      opis_hr: '',
      naziv_eng: '',
      opis_eng: '',
      naziv_tal: '',
      opis_tal: ''
      
        

    });
  }

  // ========= HTML METODE =========

  public kreirajPonudenuTemu(): void {
    this.apiService.kreirajPonudenuTemu( 
      this.myForm.value.rad_id, 
      this.myForm.value.djelatnik_id,

      this.myForm.value.naziv_hr,
      this.myForm.value.opis_hr,

      this.myForm.value.naziv_eng,
      this.myForm.value.opis_eng,
      

      this.myForm.value.naziv_tal,
      this.myForm.value.opis_tal
        ).subscribe(
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

public createMessage(type: string): void {

  if(type === 'success' ) {
    this.message.create(type, `Uspjesno je spremljen ponudena tema`);
  }
  else {
    this.message.create(type, `Spremanje nije uspjelo`);
  }
}

}