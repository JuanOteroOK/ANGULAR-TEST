import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  mail=new FormControl('', [Validators.required, Validators.email]);
  pass=new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor() { }

  ngOnInit(): void {
  }

  get mailField(){
    return this.mail;
  }

  get passField(){
    return this.pass;
  }

}
