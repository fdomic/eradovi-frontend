import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
import { AutentifikacijaRouting } from './autentifikacija.routing';
import { LoginComponent } from './login/login.component';
import { AutentifikacijaGuardService } from './autentifikacija.guard';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ZajednickiModule,
    AutentifikacijaRouting
  ],
  providers: [
    AutentifikacijaGuardService
  ]
})

export class AutentifikacijaModule {}
