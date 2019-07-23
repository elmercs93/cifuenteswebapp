import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Aviso } from '../auth/aviso.model';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html'
})
export class MantenimientoComponent implements OnInit {
  avisos: Aviso[] = [];
  constructor(public authService: AuthService) {}

  ngOnInit() {
   this.authService.cargarAvisos();
  }

  logOut() {
    localStorage.setItem('paginaActual', 'principal');
    this.authService.logOut();
  }

  onSubmit(data){
   this.authService.crearAvisos(data.titulo,data.mensaje);
  }

  borrarAviso(id: any) {
     console.log(id);
     this.authService.borrarAviso(id);
  }

}
