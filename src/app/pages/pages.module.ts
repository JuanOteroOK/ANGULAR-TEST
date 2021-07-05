import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [
    HomeComponent,
    IniciarSesionComponent,
    MovimientosComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[HomeComponent, IniciarSesionComponent, MovimientosComponent]
})
export class PagesModule { }
