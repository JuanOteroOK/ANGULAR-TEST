import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('myheader')myHeader!: ElementRef;

  mi_titulo:string="Programa PIL @2021";
  estadoPositivo:boolean=false;
  texto="Apagado";
  nombre="Luis";

  constructor(private myRender2: Renderer2) { }

  ngOnInit(): void {
    /*let body: HTMLElement = document.body;
    body.style.background = "lightblue";
    let heading: HTMLHeadingElement = document.createElement("h1");
    heading.style.color = "darkblue";
    heading.innerText = "Manipulando el DOM desde TypeScript";
    body.appendChild(heading);

    let h2:HTMLHeadingElement = document.getElementById("subtitulo") as HTMLHeadingElement;
    console.log(h2.innerText);*/

  }

  ngAfterViewInit():void{
    this.myRender2.removeClass(this.myHeader.nativeElement,  "bg-dark");
    this.myRender2.addClass(this.myHeader.nativeElement, "");
    this.myRender2.setAttribute(this.myHeader.nativeElement, "title", "Este es el header");
  }

  getTitulo(){
    return this.mi_titulo;
  }

  cambiarEstado(){

    this.estadoPositivo = !this.estadoPositivo;

    if(this.estadoPositivo){
      this.texto="Encendido";
    }else{
      this.texto="Apagado";
    }
    alert(this.nombre);

  }

}
