import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/productos';

@Pipe({
  name: 'pipeBuscarProducto'
})
export class BuscarProductoPipe implements PipeTransform {

  transform(list: Producto[], textoBuscar: string ): Producto[] {

    if (textoBuscar === '') {
        return list;
      };
  
      textoBuscar = textoBuscar.toLowerCase();
  
      return list.filter( item => {
        return item.descripcion.toLowerCase()
          .includes( textoBuscar ); 
      })

      
  }
   

}
