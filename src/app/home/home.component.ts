import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  current: string;
  constructor() { 
  }

  ngOnInit() {
       this.current=localStorage.getItem("paginaActual");
  }
  
  cambiarPagina(pagina: string){
    this.current = pagina;
    localStorage.setItem("paginaActual", pagina);
  }


}