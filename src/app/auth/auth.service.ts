import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import * as firebase from "firebase";
import { User } from "./user.model";
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Aviso } from "./aviso.model";
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userLogin: User;
  avisos: Aviso[]; 
  private itemsCollection: AngularFirestoreCollection<Aviso>;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFirestore
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {});
  }
  login(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        this.router.navigate(['/mantenimiento']);
        this.userLogin = {
          email
        };
      })
      .catch(error => {
        Swal.fire({
          title: 'Error Login!',
          text: 'Usuario o Contraseña Incorrecto',
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  isAuth() {
    return this.afAuth.authState.pipe(
      map(fbUser => {
        if (fbUser === null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null;
      })
    );
  }

  cargarAvisos() {
      this.afDB.collection('Aviso')
             .snapshotChanges()
             .pipe(
               map(  docData => {
                return docData.map( doc => {
                  return {
                    id: doc.payload.doc.id,
                    ...doc.payload.doc.data()
                  };
                });
               })
             )
             .subscribe( (coleccion: any[]) => {
              this.avisos = coleccion;
             });
  }
  crearAvisos(titulo: string, mensaje: string) {
    const aviso: Aviso = {
      titulo,
      mensaje,
      fecha: new Date().getTime()
    };
    Swal.fire({
          title: 'Guardado',
          text: 'Aviso creado Correctamente',
          type: 'success',
          confirmButtonText: 'Aceptar'
        });
    return this.afDB.collection('Aviso').add(aviso);
  }


  borrarAviso( id: string ) {
    Swal.fire({
      title: 'Eliminado',
      text: 'Aviso borrado Correctamente',
      type: 'success',
      confirmButtonText: 'Aceptar'
    });
    return this.afDB.doc(`Aviso/${ id }`)
               .delete();

  }
}
