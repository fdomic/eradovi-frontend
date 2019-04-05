import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

/** config angular i18n **/
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class ZajednickiModule {}
