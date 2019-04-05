import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
import { EradoviRouting } from './eradovi.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { OdjelComponent } from './odjel/odjel.component';
import { UcitajComponent } from './ucitaj/ucitaj.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FakultetComponent,
    OdjelComponent,
    UcitajComponent
  ],
  imports: [
    ZajednickiModule,
    EradoviRouting
  ],
  providers: []
})

export class EradoviModule {}
