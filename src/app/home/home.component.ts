import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  current: string;
  constructor(public authService: AuthService) { 
  }

  ngOnInit() {
       localStorage.setItem('paginaActual', 'principal');
       this.current = localStorage.getItem('paginaActual');
       this.authService.cargarAvisos();
  }

  cambiarPagina(pagina: string){
    this.current = pagina;
    localStorage.setItem('paginaActual', pagina);
  }


}