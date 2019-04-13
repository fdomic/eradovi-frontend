import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dohvati-fakultet',
  templateUrl: './dohvati-fakultet.component.html',
  styleUrls: ['./dohvati-fakultet.component.css']
})
export class DohvatiFakultetComponent  {

  public fakulteti: Array<any> = [];
  editRowId: Array<any> = [];

  constructor( private apiService: ApiService,  private message: NzMessageService) {
    this.dohvatiFakultete();
  }

  private dohvatiFakultete(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

      error => console.log(error)
    );
  }
    
  edit( val ){

  this.editRowId = val;
  console.log(this.editRowId);

  }

  uredi(id: number ,naziv: string){

    console.log(id,naziv);
    
    
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
