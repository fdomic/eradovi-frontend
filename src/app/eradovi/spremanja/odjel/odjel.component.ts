import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-odjel',
  templateUrl: './odjel.component.html',
  styleUrls: ['./odjel.component.scss']
})
export class OdjelComponent implements OnInit {
  
  public myForm: FormGroup;

  public fakulteti: Array<any> = [];
  
  private id;
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService ,private route: ActivatedRoute) {
    this.init();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id ) {
     
      this.apiService.dohvatiOdjel(this.id).subscribe(response => {
        let odjel = response.data;
        //TODO što ako je predan ID koji nije u listi    
        this.myForm.patchValue({
          naziv: odjel.naziv 
        });
      });
    }
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
