import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MovimientosComponent } from './movimientos/movimientos.component';



@NgModule({
  declarations: [
    HomeComponent,
    IniciarSesionComponent,
    MovimientosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent, IniciarSesionComponent, MovimientosComponent]
})
export class PagesModule { }
