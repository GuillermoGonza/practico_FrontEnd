import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  ean: string = ''

  constructor( private activateRouter: ActivatedRoute, private productoServices: ProductoService  ) { 

    this.activateRouter.params.subscribe( params => {

      this.ean = params['ean']

      console.log(params['ean'])
    })

    this.mostrarProducto(this.ean)

  }

  ngOnInit(): void {
  }

  mostrarProducto( ean: string ){
    this.productoServices.cargarPproducto(ean).subscribe( (produc: any) =>{
      
      console.log(produc)
    })
  }

}
