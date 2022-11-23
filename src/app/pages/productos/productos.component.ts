import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  productos: Producto[] = []

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {

    this.productosService.cargarProductos().subscribe( (data) =>{
      console.log(data);

    const datos = data.map( data => {
      
      return  {
        ean:  parseInt(data[0]),
        descripcion: data[1],
        precio: data[2]   

      }
    })
      this.productos = datos
      console.log(this.productos);
    })
  }

}
