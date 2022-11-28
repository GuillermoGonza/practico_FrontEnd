import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespProductos } from '../interfaces/resp-producto';
import { Producto } from '../interfaces/productos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = '/precios-justos/api/v1/';

  constructor( private http: HttpClient) { }

  cargarProductos( provincia: string ) {
      console.log(`${this.url}${ provincia }`);
      return this.http.get<RespProductos>( `${this.url}${ provincia }` )
      .pipe(
        map( resp => resp.values)
      )
        
                
               }
              

                 

}

