import { Component } from '@angular/core';
import { ApiService } from "../api.service";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-ucitaj',
  templateUrl: './ucitaj.component.html',
  styleUrls: ['./ucitaj.component.scss']
})
export class UcitajComponent  {

  public myForm: FormGroup;
  selectedFile: File = null;

  
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
   }

   private init(){
      this.kreirajFormu();
   }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      rad_id:'1',
      datoteka: '',
      status_verzije_id: ''
    });
  }

  ucitajDatoteku(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  // ========= HTML METODE =========

  public kreirajDatoteku(): void {
    let payload = new FormData();

    payload.append('datoteka', this.selectedFile,this.selectedFile.name);

    this.apiService.kreirajDatoteku(this.myForm.value.rad_id , payload , this.myForm.value.status_verzije_id ).subscribe(
      response => console.log(response),

      error => console.log(error)
    );
  }

}
