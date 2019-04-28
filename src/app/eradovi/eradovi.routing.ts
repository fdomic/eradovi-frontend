import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutentifikacijaGuardService } from '../autentifikacija/autentifikacija.guard';
import { NavigationComponent } from "./navigation/navigation.component";

// FakultetComponent
import { FakultetComponent } from './spremanja/fakultet/fakultet.component';
import { DohvatiFakultetComponent } from './dohvati/dohvati-fakultet/dohvati-fakultet.component';

// OdjelComponent
import { OdjelComponent } from './spremanja/odjel/odjel.component';
import { DohvatiOdjelComponent } from './dohvati/dohvati-odjel/dohvati-odjel.component';

// UcitajComponent
import { UcitajComponent } from './spremanja/ucitaj/ucitaj.component';

// OdjelDjelatnikaComponent
import { OdjelDjelatnikaComponent } from './spremanja/odjel-djelatnika/odjel-djelatnika.component';
import { DohvatiOdjelDjelatnikaComponent } from './dohvati/dohvati-odjel-djelatnika/dohvati-odjel-djelatnika.component';

// DjelatnikComponent
import { DjelatnikComponent } from './spremanja/djelatnik/djelatnik.component';
import { DohvatiDjelatnikaComponent } from './dohvati/dohvati-djelatnika/dohvati-djelatnika.component';

// StudentComponent
import { StudentComponent } from './spremanja/student/student.component';
import { DohvatiStudentaComponent } from './dohvati/dohvati-studenta/dohvati-studenta.component';

// RadComponent
import { RadComponent } from './spremanja/rad/rad.component';
import { DohvatiRadComponent } from './dohvati/dohvati-rad/dohvati-rad.component';

// PonudeneTemeComponent
import { PonudeneTemeComponent } from './spremanja/ponudene-teme/ponudene-teme.component';
import { DohvatiPonudenuTemuComponent } from './dohvati/dohvati-ponudenu-temu/dohvati-ponudenu-temu.component';

// KomentarComponent
import { KomentarComponent } from './spremanja/komentar/komentar.component';

//Odlucivanje
import { OdlucivanjeComponent } from './spremanja/odlucivanje/odlucivanje.component';
import { DohvatiOdlucivanjeComponent } from './dohvati/dohvati-odlucivanje/dohvati-odlucivanje.component';


const EradoviRoutes: Routes = [
  {
    path: "e-radovi",
    component: NavigationComponent,
    canActivateChild: [ AutentifikacijaGuardService ],
    children: [
      { path: "", redirectTo: "komentar", pathMatch: "full" },   

      //Fakultet
      { component: FakultetComponent, path: "fakultet" },
      { component: FakultetComponent, path: "fakultet/:id" },
      { component: DohvatiFakultetComponent, path: "dohvati-fakultet" },

      //Odjel
      { component: OdjelComponent, path: "odjel" },
      { component: OdjelComponent, path: "odjel/:id" },
      { component: DohvatiOdjelComponent, path: "dohvati-odjel" },

      //Odjel djelatnika
      { component: OdjelDjelatnikaComponent, path: "odjel-djelatnika" },
      { component: OdjelDjelatnikaComponent, path: "odjel-djelatnika/:id" },
      { component: DohvatiOdjelDjelatnikaComponent, path: "dohvati-odjel-djelatnika" },

      //Rad
      { component: RadComponent, path: "rad" },
      { component: RadComponent, path: "rad/:id" },
      { component: DohvatiRadComponent, path: "dohvati-rad" },
   
      //Ponudena tema
      { component: PonudeneTemeComponent, path: "ponudene-teme" },
      { component: PonudeneTemeComponent, path: "ponudene-teme/:id" }, 
      { component: DohvatiPonudenuTemuComponent, path: "dohvati-ponudenu-temu" },

      //Student
      { component: StudentComponent, path: "student" },
      { component: StudentComponent, path: "student/:id" },
      { component: DohvatiStudentaComponent, path: "dohvati-studenta" },

      //Djelatnik
      { component: DjelatnikComponent, path: "djelatnik" },
      { component: DjelatnikComponent, path: "djelatnik/:id" },
      { component: DohvatiDjelatnikaComponent, path: "dohvati-djelatnika" },

      // Spremanje datoteke
      { component: UcitajComponent, path: "ucitaj" },
      
      //Komentar
      { component: KomentarComponent, path: "komentar" },

      //
      { component: DohvatiOdlucivanjeComponent, path: "dohvati-odlucivanje" },
      { component: OdlucivanjeComponent, path: "odlucivanje/:id/:statusi_rada_id" },
      
      { path: "**", redirectTo: "komentar", pathMatch: "full" }
    ]
  }
];

export const EradoviRouting: ModuleWithProviders = RouterModule.forChild(
  EradoviRoutes
);
