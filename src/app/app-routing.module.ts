import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrecioComponent } from './pages/precio/precio.component';
import { PreciosComponent } from './pages/precios/precios.component';
import { HomeComponent } from './pages/home/home.component';
import { ProvinciasComponent } from './pages/provincias/provincias.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'provincias', component: ProvinciasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'precio', component: PrecioComponent },
  { path: 'precios', component: PreciosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
