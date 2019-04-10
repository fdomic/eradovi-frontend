import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-dohvati-djelatnika',
  templateUrl: './dohvati-djelatnika.component.html',
  styleUrls: ['./dohvati-djelatnika.component.scss']
})
export class DohvatiDjelatnikaComponent  {

  public djelatnici: Array<any> = [];

  constructor( private apiService: ApiService) {
    this.dohvatijDjelatnika();
  }

  private dohvatijDjelatnika(): void {
    this.apiService.dohvatijDjelatnika().subscribe(
      response => this.djelatnici = response.data,

      error => console.log(error)
    );
  }
}
