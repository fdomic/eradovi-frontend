import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dohvati-rad',
  templateUrl: './dohvati-rad.component.html',
  styleUrls: ['./dohvati-rad.component.scss']
})
export class DohvatiRadComponent  {

  public djelatnici: Array<any> = [];
  public studenti: Array<any> = [];
  public radovi: Array<any> = [];

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
      this.apiService.dohvatijDjelatnika(),
      this.apiService.dohvatiStudenta(),
      this.apiService.dohvatirad()
    ).subscribe((response) => {
      this.djelatnici = response[0].data;
      this.studenti = response[1].data;
      this.radovi = response[2].data;

      this.startPolling();
    });
  }

  // === HTML METODE ===

  
  public getNazivDjelatnika(djelatnik_id: number): string {
    let djeltanik = this.djelatnici.find(x => x.id === djelatnik_id);
    return djeltanik.ime;
  }

  
  public getNazivStudenta(student_id: number): string {
    let student = this.studenti.find(x => x.id === student_id);
    return student.ime;
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
