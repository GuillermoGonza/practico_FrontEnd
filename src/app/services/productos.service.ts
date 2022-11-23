import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespProductos } from '../interfaces/resp-producto';
import { Producto } from '../interfaces/productos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) { }

  cargarProductos() {

    let productos: Producto[]=[]

    const url = '/precios-justos/api/v1/caba.json';
      return this.http.get<RespProductos>( url )
      .pipe(
        map( resp => resp.values)
      )
        
                
               }
              

                 

}

