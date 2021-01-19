import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Mensaje} from '../modelo/mensaje';

@Component({
  selector: 'app-confirmacionmensaje',
  templateUrl: './confirmacionmensaje.page.html',
  styleUrls: ['./confirmacionmensaje.page.scss'],
})
export class ConfirmacionmensajePage implements OnInit {

  mensaje: Mensaje;
  trabaja: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.mensaje = this.router.getCurrentNavigation().extras.state.mensaje;
        this.trabaja = this.router.getCurrentNavigation().extras.state.trabaja;
        console.log("PArametros recibidos",this.mensaje,this.trabaja);
      }
    })
  }

  ngOnInit() {
  }

}
