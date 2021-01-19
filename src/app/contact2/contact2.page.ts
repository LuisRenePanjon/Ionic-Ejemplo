import { Component, OnInit } from '@angular/core';
import {Mensaje} from '../modelo/mensaje';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {MensajesService} from '../servicios/mensajes.service';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.page.html',
  styleUrls: ['./contact2.page.scss'],
})
export class Contact2Page implements OnInit {

  mensaje: Mensaje = new Mensaje;

  uid: string;

  oficina: string;

  trabaja: boolean = false;

  constructor(public router: Router, public mensajeService: MensajesService, private route:ActivatedRoute) {
    this.uid = this.route.snapshot.paramMap.get('uid');

  /*
    this.mensajeService.getMensajesById(this.uid).then(data => {
      const aux: any = data;
      this.mensaje = aux;
    });
  */
    this.mensajeService.getMensajesById2(this.uid).subscribe(data =>{
      console.log(data);
      const aux: any = data;
      this.mensaje = aux[0];
    });



  }

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
