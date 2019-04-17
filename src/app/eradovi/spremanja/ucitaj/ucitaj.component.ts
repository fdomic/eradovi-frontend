import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from '../../../api.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';


@Component({
  selector: 'app-ucitaj',
  templateUrl: './ucitaj.component.html',
  styleUrls: ['./ucitaj.component.scss']
})
export class UcitajComponent  {

  public myForm: FormGroup;
  public fileList: UploadFile[] = [];
  public selectedFile: File = null;
  public uploading = false;
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private message: NzMessageService) {
    this.init();
   }

   beforeUpload = (file: UploadFile): boolean => {
     this.fileList = this.fileList.concat(file);
     return false;
   };

   private init(){
      this.kreirajFormu();
      
   }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      rad_id:'',
      datoteka: '',
      status_verzije_id: '1'
    });
  }

  // ========= HTML METODE =========

  public kreirajDatoteku(): void {
   
    let payload = new FormData();

    payload.append('rad_id', this.myForm.value.rad_id);
    payload.append('status_verzije_id', this.myForm.value.status_verzije_id);
    payload.append('datoteka', <any>this.fileList[0]);
   

    this.apiService.kreirajDatoteku(this.myForm.value.rad_id, payload).subscribe(
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

   
  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je spremljena datoteka`);
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  }

}




