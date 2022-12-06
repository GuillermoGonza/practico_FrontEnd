import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreciosComponent } from './pages/precios/precios.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Err404Component } from './pages/err404/err404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'precios', component: PreciosComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
