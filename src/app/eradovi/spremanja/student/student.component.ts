import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  {

  private id;
  
  public studenti: Array<any> = [];

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService,private route: ActivatedRoute) {
    this.init();
  }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    console.log(this.studenti);

    if (this.id ) {
     
      this.apiService.dohvatiStudenta(this.id).subscribe(response => {
         let student = response.data;
        //TODO što ako je predan ID koji nije u listi  

        this.apiService.dohvatiKorisnika(student.korisnik_id).subscribe(response => {
          let korisnik = response.data;
         //TODO što ako je predan ID koji nije u listi  
         console.log(student);  
         this.myForm.patchValue({
  
           name: korisnik.name,
           email: korisnik.email,
           password: korisnik.password,
  
         });
       });

        console.log(student);  
        this.myForm.patchValue({

          ime: student.ime,
          prezime: student.prezime,
          oib: student.oib,
          jmbag: student.jmbag
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

  public kreirajStudenta(): void {
    this.apiService.kreirajStudenta( this.myForm.value.name, this.myForm.value.email , this.myForm.value.password , this.myForm.value.ime , this.myForm.value.prezime , this.myForm.value.oib, this.myForm.value.jmbag,this.id ).subscribe(
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

   
  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je spremljen student`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  }
}
