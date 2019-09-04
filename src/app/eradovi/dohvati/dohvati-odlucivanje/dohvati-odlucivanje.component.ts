import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { forkJoin } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dohvati-odlucivanje',
  templateUrl: './dohvati-odlucivanje.component.html',
  styleUrls: ['./dohvati-odlucivanje.component.scss']
})
export class DohvatiOdlucivanjeComponent  {

  public stanjeRada: Array<any> = [];
  public statusRada: Array<any> = [];
  public radovi: Array<any> = [];
  

  constructor( private apiService: ApiService,  private message: NzMessageService ) {
   
  }

  ngOnInit(): void {
    
    this.startPolling(true);
  }

  ngOnDestroy(): void {
    
    this.stopPolling();
  }

  private dohvatiPodatke(): void {
    forkJoin(
      this.apiService.dohvatiStanjeRada(),
      this.apiService.dohvatirad(),
      this.apiService.dohvatiStatusRada()
    ).subscribe((response) => {
      this.stanjeRada = response[0].data;
      this.radovi = response[1].data;
      this.statusRada =response[2].data;
    });

    this.startPolling();
  }
  
  public getNazivRada(rad_id: number): string {
    let rad = this.radovi.find(x => x.id === rad_id);
    return rad ? rad.naziv_hr : "";
  }

  public getOpisRada(rad_id: number): string {
    let rad = this.radovi.find(x => x.id === rad_id);
    return rad ? rad.opis_hr : "";
  }

  public getstatusRada(rad_id: number): string {
    let status = this.statusRada.find(x => x.id === rad_id);
    return status ? status.naziv : "";
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
