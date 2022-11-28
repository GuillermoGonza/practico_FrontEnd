import { Component, Input, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos';
import { Provincia } from '../../interfaces/provincias';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  productos: Producto[] = []

  provincias: any = [];

  provinciaSeleccionada: Provincia[] = []

  filtrarBusqueda: string = ''

  httpProvincia: string = ''

  constructor( private productosService: ProductosService, public provinciasService: ProvinciasService ) { }

  ngOnInit(): void {

    this.provinciasService.cargarProvincias().subscribe( (data: Provincia) => {
      console.log(data);
      this.provincias = data
    })

    // this.productosService.cargarProductos().subscribe( (data) =>{
    //     console.log(data);
  
    //   const datos = data.map( data => {
        
    //     return  {
    //       ean:  parseInt(data[0]),
    //       descripcion: data[1],
    //       precio: data[2]   
  
    //     }
    //   })
    //     this.productos = datos
    //     console.log(this.productos);
    // })
  }

  seleccionaProvincia( forma: NgForm ){

    if (forma.value.nombre === '') {
      Swal.fire('Debe seleccionar una Provincia ')
      return
    }

    this.provinciaSeleccionada = []

    let prov = this.provincias.find( (item: Provincia ) =>{ return item.nombre === forma.value.nombre });

    this.extraerProvincia(prov.api);

    this.provinciaSeleccionada.push(prov);

    this.productosService.cargarProductos(this.httpProvincia).subscribe( data =>{
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

  // Extraigo la ultima parte de la api para enviar al service.
  extraerProvincia( item: string ) {
    let strinPovincia = item.split('/')
    for (let index = 0; index < strinPovincia.length; index++) {
      const element = strinPovincia[index];
      if (element.length - 1) {
        this.httpProvincia = element
      }
    }
    console.log(this.httpProvincia);
  }

  //Filto la busqueda para mostrar
  textoBuscar( event: string ){
    this.filtrarBusqueda = event
    console.log(event);
  }

}

