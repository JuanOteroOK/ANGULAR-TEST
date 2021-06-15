import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';



@NgModule({
  declarations: [
    HomeComponent,
    IniciarSesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent, IniciarSesionComponent]
})
export class PagesModule { }
