import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  @Input() paginaActual: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.paginaActual);
    if(this.paginaActual)
       this.paginaActual=localStorage.getItem("paginaActual");
  }

  cambiarPagina(paginaActual:string){
     this.paginaActual = paginaActual;
     localStorage.setItem("paginaActual", paginaActual);
  }

}
