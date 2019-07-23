export class Aviso {
    public titulo: string;
    public mensaje: string;
    fecha?: number;
    id?: string;

     constructor(titulo: string, mensaje: string, id?: string, fecha?: number) {
          this.titulo = titulo;
          this.mensaje = mensaje;
          this.fecha = fecha;
          this.id = id;
     }
 }