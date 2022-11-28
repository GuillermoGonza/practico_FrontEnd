
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../interfaces/provincias';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  url = '/precios-justos/api/v1/';
  provincia = 'provincias.json'
  provinciaSeleccionada: string = ''

  constructor( private http: HttpClient ) { }

  cargarProvincias() {

      return this.http.get<Provincia>( `${this.url}${this.provincia}` )
     
  }


}

