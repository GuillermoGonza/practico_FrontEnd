import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PreciosComponent } from './pages/precios/precios.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Home'} },
  { path: 'productos', component: ProductosComponent, data: { titulo: 'Productos'} },
  { path: 'producto/:ean', component: ProductoComponent, data: { titulo: 'Producto'} },
  { path: 'contacto', component: ContactoComponent, data: { titulo: 'Contacto'} },
  // { path: 'precios', component: PreciosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
