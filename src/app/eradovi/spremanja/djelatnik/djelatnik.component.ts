import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-djelatnik',
  templateUrl: './djelatnik.component.html',
  styleUrls: ['./djelatnik.component.scss']
})
export class DjelatnikComponent  implements OnInit {

  private id;

  public djelatnici: Array<any> = [];

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService,private route: ActivatedRoute ) {
    this.init();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    console.log(this.djelatnici);

    if (this.id ) {
     
      this.apiService.dohvatijDjelatnika(this.id).subscribe(response => {
        let djelatnik = response.data;
        //TODO što ako je predan ID koji nije u listi  

        this.apiService.dohvatiKorisnika(djelatnik.korisnik_id).subscribe(response => {
          let korisnik = response.data;
         //TODO što ako je predan ID koji nije u listi  
         console.log(djelatnik);  
         this.myForm.patchValue({
  
           name: korisnik.name,
           email: korisnik.email,
           password: korisnik.password,
  
         });
       });

        console.log(djelatnik);  
        this.myForm.patchValue({

          ime: djelatnik.ime,
          prezime: djelatnik.prezime,
          oib: djelatnik.oib,
          jmbag: djelatnik.jmbag
        });
      });
    }

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
    this.apiService.kreirajDjelatnika( this.myForm.value.name, this.myForm.value.email , this.myForm.value.password , this.myForm.value.ime , this.myForm.value.prezime , this.myForm.value.oib, this.myForm.value.jmbag, this.id ).subscribe(
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
