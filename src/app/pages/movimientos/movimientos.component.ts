import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  mostrar_movimientos=true;
  hoy= new Date();
  movimientos=[{operacion:"Extracciom", monto:"1250"}, {operacion:"Deposito", monto:"1500"}];

  constructor() { }

  ngOnInit(): void {
  }

}
