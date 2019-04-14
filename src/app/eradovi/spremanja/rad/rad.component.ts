import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../..//api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-rad',
  templateUrl: './rad.component.html',
  styleUrls: ['./rad.component.scss']
})

export class RadComponent implements OnInit {

  public myForm: FormGroup;
  private id;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService,private route: ActivatedRoute
  ) {
    this.init();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id ) {
     
      this.apiService.dohvatirad(this.id).subscribe(response => {
        let rad = response.data;
        //TODO što ako je predan ID koji nije u listi    
        this.myForm.patchValue({
          statusi_rada_id: rad.statusi_rada_id,
          djelatnik_id: rad.djelatnik_id,
          naziv_hr: rad.naziv_hr,
          opis_hr: rad.opis_hr,
          naziv_eng: rad.naziv_eng,
          opis_eng: rad.opis_eng,
          naziv_tal: rad.naziv_tal,
          opis_tal: rad.opis_tal
      
        });
      });
    }
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




