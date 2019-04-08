import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation/navigation.component";
import { FakultetComponent } from './fakultet/fakultet.component';
import { OdjelComponent } from './odjel/odjel.component';
import { UcitajComponent } from './ucitaj/ucitaj.component';
import { DohvatiFakultetComponent } from './dohvati-fakultet/dohvati-fakultet.component';
import { DjelatnikComponent } from './djelatnik/djelatnik.component';
import { OdjelDjelatnikaComponent } from './odjel-djelatnika/odjel-djelatnika.component';
import { StudentComponent } from './student/student.component';
import { AutentifikacijaGuardService } from '../autentifikacija/autentifikacija.guard';


const EradoviRoutes: Routes = [
  {
    path: "e-radovi",
    component: NavigationComponent,
    canActivateChild: [ AutentifikacijaGuardService ],
    children: [
      { path: "", redirectTo: "fakultet", pathMatch: "full" },   

    
      { component: FakultetComponent, path: "fakultet" },
      { component: DohvatiFakultetComponent, path: "dohvati-fakultet" },
      { component: OdjelComponent, path: "odjeli" },
      { component: UcitajComponent, path: "ucitaj" },
      { component: DjelatnikComponent, path: "djelatnik" },
      { component: StudentComponent, path: "student" },
      { component: OdjelDjelatnikaComponent, path: "odjel-djelatnika" },

      { path: "**", redirectTo: "fakultet", pathMatch: "full" }
    ]
  }
];

export const EradoviRouting: ModuleWithProviders = RouterModule.forChild(
  EradoviRoutes
);
