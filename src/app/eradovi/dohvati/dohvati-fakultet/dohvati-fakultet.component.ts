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

  constructor( private apiService: ApiService ) {
    this.dohvatiFakultete();
  }

  private dohvatiFakultete(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

      error => console.log(error)
    );
  }
   
}
