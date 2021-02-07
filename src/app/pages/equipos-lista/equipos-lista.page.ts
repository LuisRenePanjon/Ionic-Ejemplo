import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../servicios/equipos.service';
import {Data} from '../../modelo/interfaz';

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.page.html',
  styleUrls: ['./equipos-lista.page.scss'],
})
export class EquiposListaPage implements OnInit {

  equipos: Data;
  nombre: string;
  cumpleanios: string;
  imangen: any;
  liga: any;
  id: string;
  mercado: string;
  nacionalidad: string;
  constructor(public equiposService: EquiposService) { }

  ngOnInit() {


  }

  getPlayer(){
    this.equiposService.getEquipo(this.id).subscribe(data => {

      this.equipos = data.data;
      this.nombre =  this.equipos.name;
      this.cumpleanios = this.equipos.birthday;
      this.imangen = this.equipos.img;
      this.liga = this.equipos.leagues;
      this.liga = this.liga[1].name;
      this.mercado = this.equipos.market_value;
      this.nacionalidad = this.equipos.country['name'];
      //this.nacionalidad= this.nacionalidad.name;
      console.log('Imprimiendo data', this.nacionalidad);
    });

    //console.log(this.equipos);
  }


}
