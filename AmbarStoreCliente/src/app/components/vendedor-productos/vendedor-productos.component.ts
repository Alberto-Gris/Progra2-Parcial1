import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiposProductoService } from 'src/app/services/tipos-producto.service';
import { TipoProductos } from 'src/models/TipoProducto';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-vendedor-productos',
  templateUrl: './vendedor-productos.component.html',
  styleUrls: ['./vendedor-productos.component.css']
})
export class VendedorProductosComponent implements OnInit {
  tiposProductos: TipoProductos[] = [];
  tipoProducto: TipoProductos = new TipoProductos();

  productos : Producto[] = [];
  producto : Producto = new Producto();


  idProducto :any;
  cantidad: any;
  pageSize = 6;
  p = 1;
  constructor(private tiposProductosService: TiposProductoService,private productoService: ProductoService, private carritoService: CarritoService, private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('select').formSelect();
      $('#modalAgregar').modal();
    });
    
    localStorage.removeItem('id_tipo_producto');
    localStorage.removeItem('tipo_producto');

    this.tiposProductosService.list().subscribe((resTiposProductos: any) => {
      this.tiposProductos=resTiposProductos;
    }, err => console.error(err));

    this.productoService.list().subscribe((resProductos: any) =>{
      resProductos.forEach((element: any) => {
        this.productoService.diferencia(localStorage.getItem('id_carrito'), element.id).subscribe((res: any) =>{
          element.cantidad = element.cantidad - res;
        },err => console.error(err));
      });
      this.productos = resProductos;
      //console.log(resProductos);
    },err => console.error(err));

  }

  seleccionarTipoProducto() {
    if (this.tipoProducto.id != null && this.tipoProducto.id != -1) {
      this.tiposProductosService.listOne(this.tipoProducto.id).subscribe((resTipoProducto: any) => {
        localStorage.setItem('id_tipo_producto', resTipoProducto.id);
        localStorage.setItem('tipo_producto', resTipoProducto.tipo_producto);
        this.router.navigateByUrl('/home/productos-secciones');
        //console.log(resTipoProducto);
      }, err => console.error(err));
    } else {
      Swal.fire({
        title: "Error",
        text: "Debe seleccionar un tipo de producto.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });
    }
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
    $('#modalAgregar').modal("close");
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
      //console.log(i);
      opciones.push(i);
    }
    return opciones;
  }

  reloadPage() {
    window.location.reload();
  }

  getTiposProductos(): TipoProductos[] {
    const tipos = [];
    let tamano = this.tiposProductos.length;
    for (let i = 0; i < tamano; i++) {
      //console.log(this.tiposProductos[i].id+" "+this.tiposProductos[i].tipo_producto);
      tipos.push(this.tiposProductos[i]);
    }
    return tipos;
  }
}