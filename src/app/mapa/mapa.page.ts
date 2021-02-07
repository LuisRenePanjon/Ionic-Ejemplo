import { Component, OnInit } from '@angular/core';
import {LocationService} from '../servicios/location.service';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  current = {
    latitude: '',
    longitude: '',
    address: ''
  };

  newLocation = {
    latitude: '',
    longitude: '',
    address: ''
  };

  constructor(private locationService: LocationService) { }

  async ngOnInit() {
    this.current = await this.locationService.getCurrentLocation();

  }

  setNewLocation(event){
    if (event){
      this.newLocation.latitude = event.lat;
      this.newLocation.longitude = event.lng;
      this.locationService.getAddressOfLocation(this.newLocation);
    }
  }


}
