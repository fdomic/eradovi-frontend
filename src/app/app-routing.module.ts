import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { OdjelComponent } from './odjel/odjel.component';
import { UcitajComponent } from './ucitaj/ucitaj.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
      {  path: '', component: LoginComponent },
      {  path: 'fakultet', component: FakultetComponent },
      {  path: 'odjel', component: OdjelComponent },
      {  path: 'ucitaj', component: UcitajComponent },
      {  path: 'navigation', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
