import { NgModule } from "@angular/core";
import { ZajednickiModule } from '../zajednicki/zajednicki.module';
import { AutentifikacijaRouting } from './autentifikacija.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ZajednickiModule,
    AutentifikacijaRouting
  ],
  providers: []
})

export class AutentifikacijaModule {}
