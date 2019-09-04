import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-dohvati-fakultet',
  templateUrl: './dohvati-fakultet.component.html',
  styleUrls: ['./dohvati-fakultet.component.css']
})
export class DohvatiFakultetComponent  {

  public fakulteti: Array<any> = [];
  editRowId: Array<any> = [];

  constructor( private apiService: ApiService ) {
   
  }
  ngOnInit(): void {
   
    this.startPolling(true);
  }

  ngOnDestroy(): void {
    
    this.stopPolling();
  }


  private dohvatiPodatke(): void {
    this.apiService.dohvatiFakultete().subscribe(
      response => this.fakulteti = response.data,

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
