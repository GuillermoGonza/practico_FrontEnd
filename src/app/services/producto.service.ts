import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto, Display, Es } from '../interfaces/infoproducto';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // 7790040136250.json

  url = 'https://world.openfoodfacts.org/api/v0/product/';
  // ean = '7790040136250'

  constructor( private http: HttpClient ) { }

  cargarPproducto( ean: string ) {

    console.log(ean, 'service')

      return this.http.get<InfoProducto>( `${this.url}${ean}.json` )
        .pipe(
          map( (infoProduct: any) => {
            let temp = infoProduct.product.selected_images.front.display.es

            console.log(temp)
          })
        )
     
  }
}
