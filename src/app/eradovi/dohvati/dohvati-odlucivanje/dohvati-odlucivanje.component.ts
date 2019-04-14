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
    this.dohvatiPodatke();
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
  }
  
  public getNazivRada(radlId: number): string {
    let rad = this.radovi.find(x => x.id === radlId);
    return rad.naziv_hr;
  }

  public getOpisRada(radlId: number): string {
    let rad = this.radovi.find(x => x.id === radlId);
    return rad.opis_hr;
  }

  public getstatusRada(radlId: number): string {
    let status = this.statusRada.find(x => x.id === radlId);
    return status.naziv;
  }

}
