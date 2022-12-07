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
        map((data: any) => {
          // aca transformo datos
          data.values.shift()
          data.values.shift()

          return data.values.map((producto:any) => {
            let precioTemp = producto[2]
              .replace('.', '')
              .replace(',', '.')
            return {
              ean: parseInt(producto[0]),
              descripcion: producto[1],
              precio: parseFloat(precioTemp),
            }
          })
        })
      )
  }

}
