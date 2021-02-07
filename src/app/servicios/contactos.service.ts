import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  probando: string;
  constructor(public angularfs: AngularFirestore) { }




}
