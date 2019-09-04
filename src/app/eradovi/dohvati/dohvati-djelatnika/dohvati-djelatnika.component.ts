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
    
  }
  
  ngOnInit(): void {
   
    this.startPolling(true);
  }

  ngOnDestroy(): void {
    
    this.stopPolling();
  }


  private dohvatiPodatke(): void {
    this.apiService.dohvatijDjelatnika().subscribe(
      response => this.djelatnici = response.data,

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
