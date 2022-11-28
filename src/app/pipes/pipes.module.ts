import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductoPipe } from './buscar-producto.pipe';



@NgModule({
  declarations: [
    BuscarProductoPipe
  ],

  exports: [
      BuscarProductoPipe 
  ],
  
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
