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
    return token !== null;
  }
}
