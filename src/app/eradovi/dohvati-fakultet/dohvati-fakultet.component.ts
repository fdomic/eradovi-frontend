import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-dohvati-fakultet',
  templateUrl: './dohvati-fakultet.component.html',
  styleUrls: ['./dohvati-fakultet.component.css']
})
export class DohvatiFakultetComponent  {
  
  public myForm: FormGroup;

  public fakulteti: Array<any> = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
   
    this.dohvatiFakultete();
  }

  private dohvatiFakultete(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

      error => console.log(error)
    );
  }

  

  


}
