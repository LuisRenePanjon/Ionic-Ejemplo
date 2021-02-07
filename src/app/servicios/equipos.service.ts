import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PlayerById} from '../modelo/interfaz';






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
  getEquipo(id: string){
    return this.http.get<PlayerById>(`https://api.soccersapi.com/v2.2/players/?user=luchorene97&token=a34ecd92d5a90e6df778dfec88d2c476&t=info&id=${id}`);
  }

  getPlayerbyId (id: string){
    return null;
  }
}
