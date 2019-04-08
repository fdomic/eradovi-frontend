import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../..//api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-rad',
  templateUrl: './rad.component.html',
  styleUrls: ['./rad.component.scss']
})
export class RadComponent  {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService
  ) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
  }
  
  private kreirajFormu(): void {
    this.myForm = this.fb.group({
     
      statusi_rada_id: '1',
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

  public kreirajrad(): void {
    this.apiService.kreirajrad( 
      this.myForm.value.statusi_rada_id, 
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
      this.message.create(type, `Uspjesno je spremljen rad`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  
  }

}




