import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MantenimientoRoutes } from './mantenimiento/mantemiento.routes';
import { AuthGuardService } from './auth/auth-guard-service';
import { AvisosComponent } from './mantenimiento/avisos/avisos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'avisos', component: AvisosComponent, canActivate: [ AuthGuardService ] },
  { path: 'mantenimiento', component: MantenimientoComponent, canActivate: [ AuthGuardService ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
