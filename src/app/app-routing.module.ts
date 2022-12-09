import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreciosComponent } from './pages/precios/precios.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:ean', component: ProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'precios', component: PreciosComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
