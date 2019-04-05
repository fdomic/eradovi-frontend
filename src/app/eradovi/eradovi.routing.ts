import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation/navigation.component";
import { FakultetComponent } from './fakultet/fakultet.component';
import { OdjelComponent } from './odjel/odjel.component';
import { UcitajComponent } from './ucitaj/ucitaj.component';

const EradoviRoutes: Routes = [
  {
    path: "e-radovi",
    component: NavigationComponent,
    children: [
      { path: "", redirectTo: "fakultet", pathMatch: "full" },

      { component: FakultetComponent, path: "fakultet" },
      { component: OdjelComponent, path: "odjeli" },
      { component: UcitajComponent, path: "ucitaj" },

      { path: "**", redirectTo: "fakultet", pathMatch: "full" }
    ]
  }
];

export const EradoviRouting: ModuleWithProviders = RouterModule.forChild(
  EradoviRoutes
);
