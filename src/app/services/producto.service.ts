import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto, Display, Es, Product } from '../interfaces/infoproducto';
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
         
            return {
              ean: infoProduct.product._id,
              subtitulo: infoProduct.product.brands,
              nombre: infoProduct.product.product_name_es,
              peso: infoProduct.product.quantity,
              ingredientes: infoProduct.product.labels,
              descripcion: infoProduct.product.categories,
              paises: infoProduct.product.countries,
              imgfrontal: infoProduct.product.image_front_url,
              imgtrasera: infoProduct.product.image_nutrition_url,
              // descripcion: infoProduct.product.ingredients
              

            }
            // let temp = infoProduct.product.selected_images.front.display.es

            // console.log(temp)
          })
        )
     
  }
}
