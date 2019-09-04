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
    
  }

  ngOnInit(): void {
   
    this.startPolling(true);
  }

  ngOnDestroy(): void {
    
    this.stopPolling();
  }

  
  private dohvatiPodatke(): void {
    this.apiService.dohvatiStudenta().subscribe(
      response => this.studente = response.data,

      error => console.log(error)
    );
    this.startPolling();
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
