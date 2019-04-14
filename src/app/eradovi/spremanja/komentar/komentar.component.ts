import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss']
})
export class KomentarComponent implements OnInit {
  
  public myForm: FormGroup;
  private id;
  
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
   
    private message: NzMessageService,
    private route: ActivatedRoute,
    
  ) {
    this.init();
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  
  private init(): void {
    this.kreirajFormu();
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      komentar: "",
      datum:""
    });
  }

  
  // ========= HTML METODE =========

  public kreirajKomentar(): void {
    this.apiService
      .kreirajKomentar(this.myForm.value.komentar,this.myForm.value.datum, this.id)
      .subscribe(
        response => console.log(response, this.createMessage("success")),
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


}
