import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { forkJoin } from 'rxjs';
import { FakultetInterface } from 'src/app/interface/kreirajFakultet.interface';

@Component({
  selector: 'app-dohvati-odjel',
  templateUrl: './dohvati-odjel.component.html',
  styleUrls: ['./dohvati-odjel.component.scss']
})
export class DohvatiOdjelComponent  {

  public fakulteti: Array<FakultetInterface> = [];
  public odjeli: Array<any> = [];

  constructor( private apiService: ApiService) {
    this.dohvatiPodatke();
  }

  private dohvatiPodatke(): void {
    forkJoin(
      this.apiService.dohvatiFakultete(),
      this.apiService.dohvatiOdjel()
    ).subscribe((response) => {
      this.fakulteti = response[0].data;
      this.odjeli = response[1].data;
    });
  }

  // === HTML METODE ===

  public getNazivFakulteta(odjelId: number): string {
    let fakultet = this.fakulteti.find(x => x.id === odjelId);
    return fakultet.naziv;
  }

}
