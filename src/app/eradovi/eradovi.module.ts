import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
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
    DohvatiOdjelComponent
  ],
  imports: [
    ZajednickiModule,
    EradoviRouting
  ],
  providers: []
})

export class EradoviModule {}
