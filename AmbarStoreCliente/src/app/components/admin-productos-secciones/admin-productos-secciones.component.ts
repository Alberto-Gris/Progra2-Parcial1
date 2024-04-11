import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { ProductoService } from '../../services/producto.service';
import { TipoProductos } from '../../../models/TipoProducto';
import { TiposProductoService } from '../../services/tipos-producto.service';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-admin-productos-secciones',
  templateUrl: './admin-productos-secciones.component.html',
  styleUrls: ['./admin-productos-secciones.component.css']
})
export class AdminProductosSeccionesComponent implements OnInit {

  productos : Producto[] = [];
  producto : Producto = new Producto();

  id_tipo_producto : any;
  titulo : any;

  pageSize = 3;
  p = 1;

  constructor(private productoService: ProductoService, private tiposProductosService: TiposProductoService) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.modal').modal();
    });
    
    this.id_tipo_producto = localStorage.getItem('id_tipo_producto');
    this.titulo = localStorage.getItem('tipo_producto');

    this.productoService.listar_productos_tipo(this.id_tipo_producto).subscribe((resProductos: any) =>{
      this.productos = resProductos;
      //console.log(resProductos);
    },err => console.error(err));

  }

  CrearProducto(){
    this.producto = new Producto();
    $('#modalNuevoProducto').modal('open');
  }

  NuevoProducto(){
    Swal.fire({
      title: "¿Confirmar Registro?",
      text: "Porfavor, verifique que los datos ingresados sean correctos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.crear_producto(this.producto.producto, this.producto.precio, this.producto.costo, this.producto.cantidad, this.producto.descripcion, this.id_tipo_producto, 0).subscribe((resProducto: any) =>{
          this.productos.push(resProducto);
          console.log(resProducto);
          $('#modalNuevoProducto').modal('close');
          this.productoService.listar_productos_tipo(this.id_tipo_producto).subscribe((resProductos: any) =>{
            this.productos = resProductos;
            //console.log(resProductos);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Producto Registrado!",
          text: "Nuevo Producto Añadido.",
          icon: "success"
        });
      }else{
        $('#modalNuevoProducto').modal('open');
      }
    });
  }

  EditarProducto(id: any){
    this.productoService.listOne(id).subscribe((resProducto: any) =>{
      this.producto = resProducto;
      console.log(this.productos);
      $('#modalEditarProducto').modal();
      $('#modalEditarProducto').modal('open');
    },err => console.error(err));
  }

  ConfirmarEdicionProducto(id: any, producto_resp: any){
    Swal.fire({
      title: "¿Confirmar Actualización Del Producto: "+producto_resp+"?",
      text: "Porfavor, verifique que los datos actualizados sean correctos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.actualizar_producto(id, this.producto.producto, this.producto.precio, this.producto.costo, this.producto.cantidad, this.producto.descripcion, this.producto.id_tipoDescuento).subscribe((resProducto: any) =>{
          //this.productos.push(resProducto);
          console.log(resProducto);
          $('#modalEditarProducto').modal('close');
          this.productoService.listar_productos_tipo(this.id_tipo_producto).subscribe((resProductos: any) =>{
            this.productos = resProductos;
            //console.log(resProductos);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Actualizacion Exitosa!",
          text: "Producto Actualizado.",
          icon: "success"
        });
      }else{
        $('#modalEditarProducto').modal('open');
      }
    });
  }

  EliminarProducto(id: any, producto_resp: any){
    Swal.fire({
      title: "¿Eliminar Producto: "+producto_resp+"?",
      text: "¡No podrá revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminar_producto(id).subscribe((resProducto: any) =>{
          //this.productos.push(resProducto);
          console.log(resProducto);
          this.productoService.listar_productos_tipo(this.id_tipo_producto).subscribe((resProductos: any) =>{
            this.productos = resProductos;
            //console.log(resProductos);
          },err => console.error(err));
        },
        err => console.error(err)
        );
      }
    },err => console.error(err));
  }

}
