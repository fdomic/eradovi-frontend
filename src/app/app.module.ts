import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AppRouting } from './app.routing';

import { ZajednickiModule } from './zajednicki/zajednicki.module';
import { AutentifikacijaModule } from './autentifikacija/autentifikacija.module';
import { EradoviModule } from './eradovi/eradovi.module';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ZajednickiModule,

    EradoviModule,
    AutentifikacijaModule,
    AppRouting
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
