import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'iniciar-sesion', component: IniciarSesionComponent},
{path: 'movimientos', component: MovimientosComponent},
{path: 'terms', component: TermsComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
/*{path:'**', component: PageNotFoundComponent}*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
