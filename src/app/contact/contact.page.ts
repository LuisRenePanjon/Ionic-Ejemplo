import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../modelo/mensaje';
import {NavigationExtras, Router} from '@angular/router';
import {MensajesService} from '../servicios/mensajes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  mensaje: Mensaje = new Mensaje;

  oficina: string;

  trabaja: boolean = false;

  constructor(public router: Router, public mensajeService: MensajesService) { }

  ngOnInit() {
  }



  guardar(){
    console.log(this.mensaje, this.oficina, this.trabaja);

    this.mensajeService.saveMensaje(this.mensaje);


    let navigationExtras: NavigationExtras = {
      state: {
        mensaje: this.mensaje,
        trabaja: this.trabaja
      }
    }
    this.router.navigate(['/confirmacionmensaje'], navigationExtras);
  }

}
