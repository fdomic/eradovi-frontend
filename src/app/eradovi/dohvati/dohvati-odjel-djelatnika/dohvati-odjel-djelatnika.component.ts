import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { forkJoin } from 'rxjs';
import { OdjelInterface } from 'src/app/interface/kreirajOdjel.interface';
import { OdjelDjelatnikaInterface } from 'src/app/interface/kreirajOdjelDjelatnika.interface';

@Component({
  selector: 'app-dohvati-odjel-djelatnika',
  templateUrl: './dohvati-odjel-djelatnika.component.html',
  styleUrls: ['./dohvati-odjel-djelatnika.component.scss']
})
export class DohvatiOdjelDjelatnikaComponent {

  
  
  public odjeli: Array<OdjelInterface> = [];
  public djelatnici: Array<any> = [];
  public odjelidjelatnika: Array<OdjelDjelatnikaInterface> = [];

  constructor( private apiService: ApiService) {
    
  }

  
  ngOnInit(): void {
   
    this.startPolling(true);
  }

  ngOnDestroy(): void {
    
    this.stopPolling();
  }

  private dohvatiPodatke(): void {
    forkJoin(
      this.apiService.dohvatiOdjel(),
      this.apiService.dohvatijDjelatnika(),
      this.apiService.dohvatiOdjelDjelatnika()
    ).subscribe((response) => {
      
      this.odjeli = response[0].data;
      this.djelatnici = response[1].data;
      this.odjelidjelatnika = response[2].data;
    });

    this.startPolling();
  }

  // === HTML METODE ===

  public getNazivDjelatnikaIme(djelatnik_id: number): string {
    let djeltanik = this.djelatnici.find(x => x.id === djelatnik_id);
    return djeltanik.ime;
  }

  public getNazivDjelatnikaPrezime(djelatnik_id: number): string {
    let djeltanik = this.djelatnici.find(x => x.id === djelatnik_id);
    return djeltanik.prezime;
  }

  public getNazivOdjela(odjelId: number): string {
    let odjeli = this.odjeli.find(x => x.id === odjelId);
    return odjeli.naziv;
  }


  
  // ======== POLLING ========

  
  private pollingTimerInstance = null;
  
  private startPolling(forceFetch?: boolean): void {
    this.pollingTimerInstance = setTimeout(() => {
      if(!this.pollingTimerInstance) return;
      this.stopPolling(); 
      this.dohvatiPodatke(); 
    }, forceFetch ? 0 : 10*1000);
   
  }

  private stopPolling(): void {
    clearTimeout(this.pollingTimerInstance);
    this.pollingTimerInstance = null;
  }


}
