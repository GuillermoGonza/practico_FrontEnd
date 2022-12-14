import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductosComponent } from './pages/productos/productos.component';
import { PipesModule } from './pipes/pipes.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    FooterComponent,
    ProductoComponent,
    Error404Component,
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
