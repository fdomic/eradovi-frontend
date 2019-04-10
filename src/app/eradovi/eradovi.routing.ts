import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutentifikacijaGuardService } from '../autentifikacija/autentifikacija.guard';
import { NavigationComponent } from "./navigation/navigation.component";



// Spremanje
import { FakultetComponent } from './spremanja/fakultet/fakultet.component';
import { OdjelComponent } from './spremanja/odjel/odjel.component';
import { UcitajComponent } from './spremanja/ucitaj/ucitaj.component';
import { OdjelDjelatnikaComponent } from './spremanja/odjel-djelatnika/odjel-djelatnika.component';
import { DjelatnikComponent } from './spremanja/djelatnik/djelatnik.component';
import { StudentComponent } from './spremanja/student/student.component';
import { RadComponent } from './spremanja/rad/rad.component';
import { PonudeneTemeComponent } from './spremanja/ponudene-teme/ponudene-teme.component';

//Dohvati
import { DohvatiFakultetComponent } from './dohvati/dohvati-fakultet/dohvati-fakultet.component';
import { DohvatiOdjelComponent } from './dohvati/dohvati-odjel/dohvati-odjel.component';
import { DohvatiDjelatnikaComponent } from './dohvati/dohvati-djelatnika/dohvati-djelatnika.component';
import { DohvatiStudentaComponent } from './dohvati/dohvati-studenta/dohvati-studenta.component';
import { DohvatiOdjelDjelatnikaComponent } from './dohvati/dohvati-odjel-djelatnika/dohvati-odjel-djelatnika.component';
import { DohvatiRadComponent } from './dohvati/dohvati-rad/dohvati-rad.component';
import { DohvatiPonudenuTemuComponent } from './dohvati/dohvati-ponudenu-temu/dohvati-ponudenu-temu.component';


const EradoviRoutes: Routes = [
  {
    path: "e-radovi",
    component: NavigationComponent,
    canActivateChild: [ AutentifikacijaGuardService ],
    children: [
      { path: "", redirectTo: "fakultet", pathMatch: "full" },   

      // Spremanje
      { component: FakultetComponent, path: "fakultet" },
      { component: OdjelComponent, path: "odjeli" },
      { component: UcitajComponent, path: "ucitaj" },
      { component: DjelatnikComponent, path: "djelatnik" },
      { component: StudentComponent, path: "student" },
      { component: OdjelDjelatnikaComponent, path: "odjel-djelatnika" },
      { component: RadComponent, path: "rad" },
      { component: PonudeneTemeComponent, path: "ponudene-teme" },

      //Dohvati
      { component: DohvatiFakultetComponent, path: "dohvati-fakultet" },
      { component: DohvatiOdjelComponent, path: "dohvati-odjel" },
      { component: DohvatiDjelatnikaComponent, path: "dohvati-djelatnika" },
      { component: DohvatiStudentaComponent, path: "dohvati-studenta" },
      { component: DohvatiOdjelDjelatnikaComponent, path: "dohvati-odjel-djelatnika" },
      { component: DohvatiRadComponent, path: "dohvati-rad" },
      { component: DohvatiPonudenuTemuComponent, path: "dohvati-ponudenu-temu" },
     
      { path: "**", redirectTo: "fakultet", pathMatch: "full" }
    ]
  }
];

export const EradoviRouting: ModuleWithProviders = RouterModule.forChild(
  EradoviRoutes
);
