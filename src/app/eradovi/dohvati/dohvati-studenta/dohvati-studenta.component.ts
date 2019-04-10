import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-dohvati-studenta',
  templateUrl: './dohvati-studenta.component.html',
  styleUrls: ['./dohvati-studenta.component.scss']
})
export class DohvatiStudentaComponent {

  public studente: Array<any> = [];

  constructor( private apiService: ApiService) {
    this.dohvatiStudenta();
  }

  private dohvatiStudenta(): void {
    this.apiService.dohvatiStudenta().subscribe(
      response => this.studente = response.data,

      error => console.log(error)
    );
  }

}
