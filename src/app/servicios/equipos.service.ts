import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TeamsByCountry} from '../modelo/interfaz';


const apiKey = environment.apiLlave;
const apiHost = environment.apiHost;
const queri : boolean = true;
const url = environment.url;

const headers = new HttpHeaders ({
  'x-rapidapi-key': apiKey,
  'x-rapidapi-host': apiHost,

});

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  constructor(public http: HttpClient) { }
/*
  private setQuery<T>(query: string){
    query = url + query;

    return this.http.get<T>(query,{headers});
  }
*/
  getEquipo(): Observable<TeamsByCountry>{
    return this.http.get<TeamsByCountry>('https://api.soccersapi.com/v2.2/teams/?user=luchorene97&token=a34ecd92d5a90e6df778dfec88d2c476&t=list&country_id=4');
  }
}
