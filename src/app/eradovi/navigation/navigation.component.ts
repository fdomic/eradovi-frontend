import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { AutentifikacijaGuardService } from 'src/app/autentifikacija/autentifikacija.guard';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  nzCollapsible = false;

  constructor(private apiService: ApiService) {
    this.refreshUserData();
  }

  refreshUserData() {
    this.apiService.refresh().subscribe(response => {
      let isProfesor = localStorage.getItem("AUTH_isProfesor");
      let isReferada = localStorage.getItem("AUTH_isReferada");
      let isStudent = localStorage.getItem("AUTH_isStudent");

      if(isReferada != response.credentials.isReferada.toString()) this.odjava();
      if(isProfesor != response.credentials.isProfesor.toString()) this.odjava();
      if(isStudent != response.credentials.isStudent.toString()) this.odjava();
    });
  }

  public show(tip: string): boolean {
    return AutentifikacijaGuardService.provjera(tip);
  }

  public odjava() {
    window.localStorage.removeItem('AUTH_TOKEN');
    window.localStorage.removeItem('AUTH_id');

    localStorage.removeItem("AUTH_isProfesor");
    localStorage.removeItem("AUTH_isReferada");
    localStorage.removeItem("AUTH_isStudent");
    window.location.href = '/';
  }
  
}
