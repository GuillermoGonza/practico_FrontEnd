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
import { Err404Component } from './pages/err404/err404.component';

//Para escanear con la webcam
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    Err404Component,
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    ZXingScannerModule,
    NgbPaginationModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
