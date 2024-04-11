import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TiposProductoService } from 'src/app/services/tipos-producto.service';
import { Producto } from 'src/models/Producto';
declare var $:any;

import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendedor-productos-secciones',
  templateUrl: './vendedor-productos-secciones.component.html',
  styleUrls: ['./vendedor-productos-secciones.component.css']
})
export class VendedorProductosSeccionesComponent implements OnInit {

  productos : Producto[] = [];
  producto : Producto = new Producto();

  id_tipo_producto : any;
  titulo : any;
  idProducto :any;
  cantidad: any;
  pageSize=10;
  p = 1;
  constructor(private productoService: ProductoService, private tiposProductosService: TiposProductoService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#modalAgregar').modal();
    });

    this.id_tipo_producto = localStorage.getItem('id_tipo_producto');
    this.titulo = localStorage.getItem('tipo_producto');

    this.productoService.listar_productos_tipo(this.id_tipo_producto).subscribe((resProductos: any) =>{
      resProductos.forEach((element: any) => {
        this.productoService.diferencia(localStorage.getItem('id_carrito'), element.id).subscribe((res: any) =>{
          element.cantidad = element.cantidad - res;
        },err => console.error(err));
      });
      this.productos = resProductos;
      //console.log(resProductos);
    },err => console.error(err));

  }

  ApartarProducto(producto: Producto){
    console.log(producto);
  }

  AnadirCarrito(){
    this.carritoService.agregarProducto(localStorage.getItem('id_carrito'), this.idProducto,this.producto.cantidad_producto).subscribe((res: any) =>{
      //console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      });
    });
    $("#modalAgregar").modal("close");
    this.ngOnInit();
    this.reloadPage();
  }

  ComprarCantidad(id: any) {
    this.productoService.listOne(id).subscribe((res1: any) =>{
      //console.log(res);
      $("#modalAgregar").modal("open");
      this.idProducto = id
      this.productoService.diferencia(localStorage.getItem('id_carrito'), id).subscribe((res2: any) =>{
        this.cantidad = res1.cantidad - res2;
      });
    },err => console.error(err));
  }

  getCantidadOptions(): number[] {
    const opciones = [];
    for (let i = 1; i <= this.cantidad; i++) {
      opciones.push(i);
    }
    return opciones;
  }

  reloadPage() {
    window.location.reload();
  }
}

  