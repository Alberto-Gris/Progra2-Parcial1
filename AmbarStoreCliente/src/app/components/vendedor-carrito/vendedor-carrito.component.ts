import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';
import { CrearCarrito } from 'src/models/CrearCarrito';
import { MostrarCarrito } from 'src/models/MostrarCarrito';
import { Producto } from 'src/models/Producto';

import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-vendedor-carrito',
  templateUrl: './vendedor-carrito.component.html',
  styleUrls: ['./vendedor-carrito.component.css'],
  providers: [DatePipe]
})
export class VendedorCarritoComponent implements OnInit {

  mostrarCarritosModel: MostrarCarrito[] = [];
  mostrarCarritoModel: MostrarCarrito = new MostrarCarrito();
  subtotal: any = 0;
  descuento: any = 0;
  total: any = 0;
  fecha: any;
  fechaFormateada: any;
  horaFormateada: any;

  crearCarritoModel: any;
  id_usuario: any;

  cantidad: any;
  producto: Producto = new Producto();
  idProducto :any;

  constructor(private datePipe: DatePipe, private carritoService: CarritoService, private productoService: ProductoService) {
    
   }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#modalAgregar').modal();
    });

    this.subtotal = 0;
    this.descuento = 0;
    this.total = 0;
    this.carritoService.mostrarCarrito(localStorage.getItem('id_carrito')).subscribe((res: any) => {
      if (res.id_carrito == -1) {
        //console.log("Carrito Vacio");
        this.mostrarCarritosModel = [];
      }else{
        res.forEach((element: any) => {
          //Para mostrar los totales
          this.subtotal = this.subtotal + element.monto_eventual_sin_descuento;
          this.total = this.total + element.monto_eventual;

          //Para llenar campo de limite de productos y no permitir agregar mas
          this.productoService.listOne(element.id_producto).subscribe((res2: any) =>{
            //console.log("res"+res2.cantidad+" element"+element.cantidad);
            if (res2.cantidad == element.cantidad) 
              element.limite = true;
            else
              element.limite = false;
            //console.log(element.limite);
          },err => console.error(err));
        });
        this.descuento = this.subtotal - this.total;

        this.mostrarCarritosModel = res;
      };
    },err => console.error(err));
  }

  AnadirProducto(id: any,producto: any){
    this.carritoService.agregarProducto(localStorage.getItem('id_carrito'), id,1).subscribe((res: any) =>{
      //console.log(res);
      //Swal.fire({
      //  icon: 'success',
      //  title: producto+' agregado al carrito',
      //  showConfirmButton: false,
      //  timer: 1500
      //});
      this.ngOnInit();
    });
    this.reloadPage();
  }

  EliminarUnoCarrito(id: any, producto: any){
    this.carritoService.eliminarProducto(localStorage.getItem("id_carrito"),id).subscribe((res: any) =>{
      //console.log(res);
      //Swal.fire({
      //  icon: 'success',
      //  title: 'Un '+producto+' eliminado del carrito',
      //  showConfirmButton: false,
      //  timer: 1500
      //});
      if (res == 0) {
        this.carritoService.eliminarTodoElProducto(localStorage.getItem("id_carrito"),id).subscribe((res: any) =>{
          //console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Producto '+producto+' eliminado del carrito',
            showConfirmButton: false,
            timer: 1500
          });
          this.ngOnInit();
        });
      }
      this.ngOnInit();
    });
    this.reloadPage();
  }

  EliminarTodoCarrito(id: any, producto: any){
    this.carritoService.eliminarTodoElProducto(localStorage.getItem("id_carrito"),id).subscribe((res: any) =>{
      //console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Producto '+producto+' eliminado del carrito',
        showConfirmButton: false,
        timer: 1500
      });
      this.ngOnInit();
    });
    this.reloadPage();
  }

  ComprarCarrito(){
    let bandera = false;
    this.fecha = new Date();
    this.fechaFormateada = this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
    this.horaFormateada = this.datePipe.transform(this.fecha, 'HH:mm:ss');
    console.log(localStorage.getItem("id_carrito"));
    this.carritoService.cantidadesMaximas(localStorage.getItem("id_carrito")).subscribe((resMax: any) =>{
      console.log(resMax);
      resMax.forEach((element: any) => {
        this.productoService.listOne(element.id).subscribe((resMax2: any) =>{
          console.log("a:"+element.cantidad+" b:"+resMax2.cantidad);
          //element es del carrito y resMax2 es del producto
          if (resMax2.cantidad <= 0) {//Si la cantidad del producto es 0
            bandera = true;
            this.carritoService.eliminarTodoElProducto(localStorage.getItem('id_carrito'), element.id).subscribe((ress: any) =>{
              //console.log(res);
            },err => console.error(err));
            Swal.fire({
              icon: 'warning',
              title: 'El producto '+resMax2.producto+' se eliminó del carrito por falta de existencias',
              showConfirmButton: false,
              timer: 3000
            });
            this.ngOnInit();
          }else{
            if (element.cantidad > resMax2.cantidad) {//Si la cantidad del carrito es mayor a la cantidad disponible
              bandera = true;
              element.cantidad = resMax2.cantidad;
              this.carritoService.updateCantidad(localStorage.getItem('id_carrito'), element.id,element.cantidad).subscribe((ress: any) =>{
                //console.log(res);
                console.log("prueba");
              },err => console.error(err));
              Swal.fire({
                icon: 'warning',
                title: 'La cantidad de '+resMax2.producto+' se redujo a la cantidad disponible',
                showConfirmButton: false,
                timer: 3000
              });
              this.ngOnInit();
            }
          }
        },err => console.error(err));
      });
    });
    
    if (bandera == false) {
      Swal.fire({
        title: "Confirmación de Compra",
        text: "¿Desea confirmar la compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar"
      }).then((result) => {
        if (result.isConfirmed) {
          this.carritoService.comprarCarrito(localStorage.getItem("id_carrito"),this.fechaFormateada,this.horaFormateada).subscribe((res: any) =>{
            this.crearCarritoModel = new CrearCarrito();
            this.id_usuario = localStorage.getItem('id_usuario');
            this.carritoService.crearCarrito(this.crearCarritoModel.confirmado, this.crearCarritoModel.fecha, this.crearCarritoModel.hora, this.crearCarritoModel.monto_eventual_sin_descuento, this.crearCarritoModel.monto_eventual, this.crearCarritoModel.costo_eventual, this.crearCarritoModel.id_cliente, this.id_usuario).subscribe((res2: any) => {
              //console.log(res2);
              localStorage.removeItem('id_carrito');
              localStorage.setItem('id_carrito', res2);
              this.ngOnInit();
            },err => console.error(err));
          });
          Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            showConfirmButton: false,
            timer: 1500
          });
        }  
      });
    }
  }

  ComprarCantidad(id: any) {
    this.productoService.listOne(id).subscribe((res1: any) =>{
      //console.log(res);
      $("#modalAgregar").modal("open");
      this.idProducto = id
      this.cantidad = res1.cantidad;
    },err => console.error(err));
  }

  getCantidadOptions(): number[] {
    const opciones = [];
    for (let i = 1; i <= this.cantidad; i++) {
      opciones.push(i);
    }
    return opciones;
  }

  ActualizarCantidad(){
    //console.log(this.producto.cantidad_producto);
    this.carritoService.updateCantidad(localStorage.getItem('id_carrito'), this.idProducto,this.producto.cantidad_producto).subscribe((res: any) =>{
      //console.log(res);
      //Swal.fire({
      //  icon: 'success',
      //  title: 'Cantidad actualizada',
      //  showConfirmButton: false,
      //  timer: 1000
      //});
    },err => console.error(err));
    $('#modalAgregar').modal("close");
    this.ngOnInit();
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}
