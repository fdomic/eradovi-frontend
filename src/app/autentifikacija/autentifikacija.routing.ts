import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

const AutentifikacijaRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  }
];

export const AutentifikacijaRouting: ModuleWithProviders = RouterModule.forChild(
  AutentifikacijaRoutes
);
