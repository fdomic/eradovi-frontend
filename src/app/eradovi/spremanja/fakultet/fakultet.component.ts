import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: "app-fakultet",
  templateUrl: "./fakultet.component.html",
  styleUrls: ["./fakultet.component.scss"]
})
export class FakultetComponent {

  public myForm: FormGroup;

  
  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService) {
    this.init();
  }


  private init(): void {
    this.kreirajFormu();
  }
  
  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      naziv: ""
    });
  }

  // ========= HTML METODE =========
   c:number;

  public kreirajFakultet(): void {
    this.apiService.kreirajFakultet(this.myForm.value.naziv).subscribe(
      response => console.log(response, this.createMessage('success')),
      error => console.log(error, this.createMessage('error'))
    );
    
  }

    
  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je spremljen fakultet`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }

}

}


