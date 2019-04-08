import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-odjel',
  templateUrl: './odjel.component.html',
  styleUrls: ['./odjel.component.scss']
})
export class OdjelComponent {
  
  public myForm: FormGroup;

  public fakulteti: Array<any> = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService) {
    this.init();
  }

  private init(): void {
    this.kreirajFormu();
    this.dohvatiFakultete();
  }

  private dohvatiFakultete(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

      error => console.log(error)
    );
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
   
      fakultet_id: '',
      naziv: ''
    });
  }

  
// ========= HTML METODE =========
  public kreirajOdjel(): void {
    
    this.apiService.kreirajOdjel(this.myForm.value.fakultet_id , this.myForm.value.naziv ).subscribe(
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je spremljen odjel`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }

  }

}
