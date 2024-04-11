import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
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
import { Home2Component } from './components/home2/home2.component';
import { AdminVentasComponent } from './components/admin-ventas/admin-ventas.component';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cambio',
    component: CambiarContrasenaComponent,
  },
  {
    path: 'reestablecerContrasena/:token',
    component: RecuperarContrasenaComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: "productos",
        component: VendedorProductosComponent
      },
      {
        path: "productos-secciones",
        component: VendedorProductosSeccionesComponent
      },
      {
        path: "apartados",
        component: VendedorApartadosComponent
      },
      {
        path: "ventas-dia",
        component: VendedorVentasDiaComponent
      },
      {
        path: "nuevo-cliente",
        component: VendedorNuevoClienteComponent
      },
      {
        path: "carrito",
        component: VendedorCarritoComponent
      }
    ]
  },{
    path: 'admin',
    component: Home2Component,
    children:[
      {
        path: "apartados",
        component: AdminApartadosComponent
      },
      {
        path: "productos",
        component: AdminProductosComponent
      },
      {
        path: "productos-secciones",
        component: AdminProductosSeccionesComponent
      },
      {
        path: "cajeros",
        component: AdminCajerosComponent
      },
      {
        path: "ventas",
        component: AdminVentasComponent
      },
      {
        path: "ofertas",
        component: OfertasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
