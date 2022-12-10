import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProducto } from 'src/app/interfaces/infoproducto';
import { Producto } from 'src/app/interfaces/productos';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

   
  ean: string = '';
  producto: InfoProducto[] = [];

  constructor( private activateRouter: ActivatedRoute, private productoServices: ProductoService  ) { 

    this.activateRouter.params.subscribe( params => {

      this.ean = params['ean']

      //console.log(params['ean'])
    })
  }

  ngOnInit(): void {
  
  }

  mostrarProducto( ean: string ){
    this.productoServices.cargarPproducto(ean).subscribe( (produc) =>{

      
      
      //console.log(produc)
    })
  }

  getProductos(){
    this.productoServices.getAll().subscribe((data:InfoProducto[])=>{
      this.producto = data;
    })
  }
}
