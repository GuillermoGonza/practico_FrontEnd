
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../interfaces/provincias';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {


  constructor( private http: HttpClient ) { }


  
  cargarProvincias() {

    const url = '/precios-justos/api/v1/provincias.json';
      return this.http.get<Provincia>( url )
     
  }


  

    // allprovincias(item: Provincia){
    //   const result = this.provincias.push(item)
    //   console.log(result);
    // }

}

