import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PreciosComponent } from './pages/precios/precios.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:ean', component: ProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'precios', component: PreciosComponent },
  { path: '**', component: Error404Component },
=======
  { path: 'home', component: HomeComponent, data: { titulo: 'Home'} },
  { path: 'productos', component: ProductosComponent, data: { titulo: 'Productos'} },
  { path: 'producto/:ean', component: ProductoComponent, data: { titulo: 'Producto'} },
  { path: 'contacto', component: ContactoComponent, data: { titulo: 'Contacto'} },
  // { path: 'precios', component: PreciosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

>>>>>>> 17c0c953efc90ba93a84067de8af67189a8e1406
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
