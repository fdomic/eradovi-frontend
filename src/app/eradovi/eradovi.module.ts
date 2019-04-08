import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
import { EradoviRouting } from './eradovi.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { OdjelComponent } from './odjel/odjel.component';
import { UcitajComponent } from './ucitaj/ucitaj.component';
import { DohvatiFakultetComponent } from './dohvati-fakultet/dohvati-fakultet.component';
import { OdjelDjelatnikaComponent } from './odjel-djelatnika/odjel-djelatnika.component';
import { DjelatnikComponent } from './djelatnik/djelatnik.component';
import { StudentComponent } from './student/student.component';
import { RadComponent } from './rad/rad.component';



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
    RadComponent
  ],
  imports: [
    ZajednickiModule,
    EradoviRouting
  ],
  providers: []
})

export class EradoviModule {}
