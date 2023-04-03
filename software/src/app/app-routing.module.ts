import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CurrencyComponent} from "./components/currency/currency.component";
import {ErrorComponent} from "./components/error/error.component";
import {RecordComponent} from "./components/record/record.component";
import {AuthGuard} from "./guard/auth.guard";
import {StartComponent} from "./components/start/start.component";
import {LocationComponent} from "./components/location/location.component";

const routes: Routes = [
  //cuando no se pone una ruta se redirige a la ruta por defecto
  { path: '', component: StartComponent},
  { path: 'convertion', component: CurrencyComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent},
  { path: 'list', component: RecordComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: 'location', component: LocationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
