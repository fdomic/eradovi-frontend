import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { forkJoin } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dohvati-ponudenu-temu',
  templateUrl: './dohvati-ponudenu-temu.component.html',
  styleUrls: ['./dohvati-ponudenu-temu.component.scss']
})
export class DohvatiPonudenuTemuComponent {

  public ponudeneTeme: Array<any> = [];
  public djelatnici: Array<any> = [];

  constructor( private apiService: ApiService,private message: NzMessageService) {
    
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
      this.apiService.dohvatiPonudenuTemu(),
      
    ).subscribe((response) => {
      this.djelatnici = response[0].data;
      this.ponudeneTeme = response[1].data;

      this.startPolling();
    });
  }

  // === HTML METODE ===
  
  public getNazivDjelatnika(djelatnik_id: number): string {
    let djeltanik = this.djelatnici.find(x => x.id === djelatnik_id);
    return djeltanik.ime;
  }

  public rezervirajTemu(id: number){

    this.apiService.rezervirajTemu(id).subscribe(
      response => console.log(response, this.createMessage('success')),

      error => console.log(error, this.createMessage('error'))
    );
  }

  public createMessage(type: string): void {

    if(type === 'success' ) {
      this.message.create(type, `Uspjesno je rezervirana tema`);

     
      
    }
    else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }

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



  