import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dohvati-ponudenu-temu',
  templateUrl: './dohvati-ponudenu-temu.component.html',
  styleUrls: ['./dohvati-ponudenu-temu.component.scss']
})
export class DohvatiPonudenuTemuComponent  {

  public ponudeneTeme: Array<any> = [];
  public djelatnici: Array<any> = [];

  constructor( private apiService: ApiService) {
    this.dohvatiPodatke();
  }

  private dohvatiPodatke(): void {
    forkJoin(
      this.apiService.dohvatijDjelatnika(),
      this.apiService.dohvatiPonudenuTemu(),
      
    ).subscribe((response) => {
      this.djelatnici = response[0].data;
      this.ponudeneTeme = response[1].data;
      
    });
  }

  
  // === HTML METODE ===

  
  public getNazivDjelatnika(djelatnik_id: number): string {
    let djeltanik = this.djelatnici.find(x => x.id === djelatnik_id);
    return djeltanik.ime;
  }



}



  