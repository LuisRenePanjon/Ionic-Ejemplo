import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Mensaje} from '../modelo/mensaje';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public angularfs: AngularFirestore) { }

  saveMensaje(mensaje: Mensaje){

    const refMensaje = this.angularfs.collection("mensajes");
    if(mensaje.uid==null)
      mensaje.uid = this.angularfs.createId();
      mensaje.deleted = false;
    refMensaje.doc(mensaje.uid).set(Object.assign({}, mensaje) , {merge: true});
  }

  getMensajes(): Observable<any[]> {
    return this.angularfs.collection("mensajes",
        ref => ref.where("deleted",'==',false)).valueChanges();

  }

  async getMensajesById(uid: string){
    try {
      let aux = await this.angularfs.collection("mensajes",
          ref => ref.where('uid','==',uid))
          .valueChanges().pipe(first()).toPromise().then(doc =>{
            return doc;
          }).catch(error => {
            throw error;
          });
      if (aux == null)
        return {};
      return aux[0];
    }catch(error){
      console.error(`Error get msg by id`, error);
      throw error;
    }
  }

  getMensajesById2(uid: string): Observable<any>{
    return this.angularfs.collection("mensajes",
        ref => ref.where('uid','==',uid))
        .valueChanges();
  }

  borrarContactoById(uid: string){
    const refMensaje = this.angularfs.collection("mensajes");
    const aux = {deleted : true};
    refMensaje.doc(uid).set({...aux} , {merge: true});

  }
}
