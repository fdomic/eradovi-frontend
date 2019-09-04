import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { forkJoin } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss']
})
export class KomentarComponent {
  
  public myForm: FormGroup;
  public radovi: Array<any> = [];
  public poruke: Array<any> = [];
  public studenti: Array<any> = [];
  public djelatnici: Array<any> = [];
  public kronologija: Array<any> = [];
  date = null;
  
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    
    private message: NzMessageService,
    
    
  ) {
    this.init();
    
  }

  private init(): void {
    this.kreirajFormu();
    this.dohvatiPodatke();
  }

  private dohvatiPodatke(): void {
    forkJoin(
      this.apiService.dohvatirad(),
      this.apiService.dohvatiStudenta(),
      this.apiService.dohvatijDjelatnika(),
      this.apiService.dohvatiKomentar(),
      
    ).subscribe((response) => {
      this.radovi = response[0].data;
      this.studenti = response[1].data;
      this.djelatnici = response[2].data;
      this.poruke = response[3].data;
      
    });
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      rad_id:"",
      komentar: "",

      naziv_hr:"",
      opis_hr:"",
      profesor:"",
      student:""

    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  odabraniRad(){
    this.Kronologija(this.myForm.value.rad_id);
    
  }
  
  private Kronologija(rad_id): void {
    this.apiService.Kronologija(rad_id).subscribe(
      response => this.kronologija = response.data,

      error => console.log(error)
    );
    this.dohvatiRad(rad_id);
  }

  private dohvatiRad(rad_id): void {
  
    this.apiService.dohvatirad(rad_id).subscribe(response => {
        let rad = response.data;
        
        this.myForm.patchValue({
          naziv_hr: rad.naziv_hr,
     
          profesor:this.getPunoIme(-1, rad.djelatnik_id),
          student:this.getPunoIme(rad.student_id, -1)
        });
      });
    
  }


  // ========= HTML METODE =========

  public kreirajKomentar(): void {
    this.apiService
      .kreirajKomentar(this.myForm.value.komentar, moment().format("YYYY-MM-DD HH:mm:ss") ,this.myForm.value.rad_id)
      .subscribe(
        response => {
          this.createMessage("success")
          this.odabraniRad();
          this.myForm.patchValue({ komentar: "" });
          console.log(response);
        },
        error => console.log(error, this.createMessage("error"))
      );
  }

  public createMessage(type: string): void {
    if (type === "success") {
      this.message.create(type, `Uspjesno je spremljen komentar`);
      
    } else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  }

  public getPunoIme(student_id, djelatnik_id): string {
    return this.getIme(student_id,djelatnik_id) + '' + this.getPrezime(student_id,djelatnik_id);
  }
  
  public getIme(student_id?: number , djelatnik_id?:number ): string {
   
    let ime= "N.";

    if(student_id > 0){
      let student = this.studenti.find(x => x.id === student_id);
      return  student.ime;
    }
    if(djelatnik_id > 0){
      let djelatnik = this.djelatnici.find(x => x.id === djelatnik_id);
      return  djelatnik.ime;
    }
    else{
      return <string> ime;
    }
  }

  public getPrezime(student_id?: number , djelatnik_id?:number ): string {
   
    let prezime= "N.";

    if(student_id > 0){
      let student = this.studenti.find(x => x.id === student_id);
      return  student.prezime;
    }
    
    if(djelatnik_id > 0){
      let djelatnik = this.djelatnici.find(x => x.id === djelatnik_id);
      return  djelatnik.prezime;
    }
    else{
      return <string> prezime;
    }
  }

  public skini(kron){

    console.log(kron);
    
  }

}