import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendedorProductosComponent } from './components/vendedor-productos/vendedor-productos.component';
import { VendedorProductosSeccionesComponent } from './components/vendedor-productos-secciones/vendedor-productos-secciones.component';
import { VendedorApartadosComponent } from './components/vendedor-apartados/vendedor-apartados.component';
import { VendedorVentasDiaComponent } from './components/vendedor-ventas-dia/vendedor-ventas-dia.component';
import { VendedorNuevoClienteComponent } from './components/vendedor-nuevo-cliente/vendedor-nuevo-cliente.component';
import { VendedorCarritoComponent } from './components/vendedor-carrito/vendedor-carrito.component';
import { AdminApartadosComponent } from './components/admin-apartados/admin-apartados.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminProductosSeccionesComponent } from './components/admin-productos-secciones/admin-productos-secciones.component';
import { AdminCajerosComponent } from './components/admin-cajeros/admin-cajeros.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Home2Component } from './components/home2/home2.component';
import { Header2Component } from './components/header2/header2.component';
import { AdminVentasComponent } from './components/admin-ventas/admin-ventas.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { Footer2Component } from './components/footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendedorProductosComponent,
    VendedorProductosSeccionesComponent,
    VendedorApartadosComponent,
    VendedorVentasDiaComponent,
    VendedorNuevoClienteComponent,
    VendedorCarritoComponent,
    AdminApartadosComponent,
    AdminProductosComponent,
    AdminProductosSeccionesComponent,
    AdminCajerosComponent,
    HomeComponent,
    HeaderComponent,
    Home2Component,
    Header2Component,
    AdminVentasComponent,
    CambiarContrasenaComponent,
    RecuperarContrasenaComponent,
    OfertasComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
