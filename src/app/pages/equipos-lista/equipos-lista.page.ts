import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../servicios/equipos.service';
import {Datum} from '../../modelo/interfaz';

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.page.html',
  styleUrls: ['./equipos-lista.page.scss'],
})
export class EquiposListaPage implements OnInit {

  equipos : Datum[] =[] ;
  constructor(public equiposService: EquiposService) { }

  ngOnInit() {

    this.equiposService.getEquipo().subscribe(data => {
      //console.log(data);
      this.equipos = data.data;
    });

    //console.log(this.equipos);
  }


}
