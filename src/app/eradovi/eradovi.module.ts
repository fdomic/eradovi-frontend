import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
import {MatDialogModule} from '@angular/material/dialog';
import { EradoviRouting } from './eradovi.routing';


// Spremanje
import { NavigationComponent } from '././navigation/navigation.component';
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
import { DohvatiRadComponent } from './dohvati/dohvati-rad/dohvati-rad.component';
import { DohvatiPonudenuTemuComponent } from './dohvati/dohvati-ponudenu-temu/dohvati-ponudenu-temu.component';
import { DohvatiOdjelDjelatnikaComponent } from './dohvati/dohvati-odjel-djelatnika/dohvati-odjel-djelatnika.component';
import { KomentarComponent } from './spremanja/komentar/komentar.component';
import { DohvatiOdlucivanjeComponent } from './dohvati/dohvati-odlucivanje/dohvati-odlucivanje.component';
import { OdlucivanjeComponent } from './spremanja/odlucivanje/odlucivanje.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FakultetComponent,
    OdjelComponent,
    UcitajComponent,
    DohvatiFakultetComponent,
    OdjelDjelatnikaComponent,
    DjelatnikComponent,
    StudentComponent,
    RadComponent,
    PonudeneTemeComponent,
    DohvatiOdjelComponent,
    DohvatiDjelatnikaComponent,
    DohvatiStudentaComponent,
    DohvatiRadComponent,
    DohvatiPonudenuTemuComponent,
    DohvatiOdjelDjelatnikaComponent,
    KomentarComponent,
    DohvatiOdlucivanjeComponent,
    OdlucivanjeComponent
  ],
  imports: [
    ZajednickiModule,
    EradoviRouting,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[FakultetComponent]
})

export class EradoviModule {}
