import { Component, OnInit } from '@angular/core';
import {MensajesService} from '../servicios/mensajes.service';
import {Observable} from 'rxjs';
import {NavigationExtras, Router} from '@angular/router';
import {Mensaje} from '../modelo/mensaje';
import {ToastController, AlertController} from '@ionic/angular';
import {NotificacionesService} from '../servicios/notificaciones.service';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.page.html',
  styleUrls: ['./lista-mensajes.page.scss'],
})
export class ListaMensajesPage implements OnInit {

  mensajes: Observable<any[]>;

  constructor(public mensajeService: MensajesService,
              public router: Router, public notification: NotificacionesService,
              public alertController: AlertController) { }

  ngOnInit(){
    this.mensajes = this.mensajeService.getMensajes();
  }

  nuevoContacto(){
    this.router.navigate(['contact']);
  }
/*
  editarContacto(mensaje: Mensaje){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        mensaje: mensaje;
      }
    };
    this.router.navigate(['contact'], navigationExtras);
  }
*/
  editarContactoById(uid: string){
    this.router.navigate(['contact', uid]);
  }

  async borrarContactoById(uid: string){
    this.mensajeService.borrarContactoById(uid);
    this.notification.notificationToast("Registro Borrado!!")

  }

  async confirmarBorrado(uid: string) {
    this.notification.confirmar("!Borrando!",
        `Estas seguro de <strong>Borrar</strong> este registro`,
        this.borrarContactoById.bind(this, uid));
  }

}

