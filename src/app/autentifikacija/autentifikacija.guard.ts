import { Injectable } from "@angular/core";
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AutentifikacijaGuardService implements CanActivateChild {
  constructor() {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let token = localStorage.getItem("AUTH_TOKEN");
    if(token === null) window.location.href = "/";

    let isOk = token !== null && AutentifikacijaGuardService.provjera(state.url);

    if(isOk == false) {
      window.location.href = '/';
    }

    return isOk;
  }

  public static provjera(tip: string): boolean {
    // return true;
    let isProfesor = localStorage.getItem("AUTH_isProfesor");
    let isReferada = localStorage.getItem("AUTH_isReferada");
    let isStudent = localStorage.getItem("AUTH_isStudent");

    switch(tip) {
      case '/e-radovi/fakultet':
      case '/e-radovi/fakultet/':
      case '/e-radovi/dohvati-fakultet':
      case 'fakultet':
        if(isReferada == "true") return true;
        break;

        
      case '/e-radovi/odjel':
      case '/e-radovi/dohvati-odjel':  
      case '/e-radovi/odjel-djelatnika':
      case '/e-radovi/dohvati-odjel-djelatnika':  
      case 'odjeli':
          if(isReferada == "true") return true;
          break;

      case '/e-radovi/student':
      case '/e-radovi/dohvati-studenta': 
      case 'studenti':
            if(isReferada == "true") return true;
            break;  
      
      case '/e-radovi/djelatnik':
      case '/e-radovi/dohvati-djelatnika': 
      case 'djelatnici':
            if(isReferada == "true") return true;
            break;
          

      case '/e-radovi/ucitaj':
      case 'ucitaj':
          if(isStudent == "true") return true;
          if(isReferada == "true") return true;
          if(isProfesor == "true") return true;
          break;
      case '/e-radovi/rad':
      case '/e-radovi/dohvati-rad': 
      case 'rad':
          if(isStudent == "true") return true;
          if(isReferada == "true") return true;
          if(isProfesor == "true") return true;
          break;
      

      case '/e-radovi/ponudene-teme':
      case '/e-radovi/dohvati-ponudenu-temu':
      case 'teme':
          if(isStudent == "true") return true;
          if(isReferada == "true") return true;
          if(isProfesor == "true") return true;
          break;

      case '/e-radovi/dohvati-odlucivanje':
      case 'odluke':
          if(isReferada == "true") return true;
          if(isProfesor == "true") return true;
          break;
          

      case '/e-radovi/komentar':
      case 'kronologija':
        return true;
    }

    if(tip.indexOf('/e-radovi/ponudene-teme') !== -1) {
      return true;
    }

    return false;
  }
}
