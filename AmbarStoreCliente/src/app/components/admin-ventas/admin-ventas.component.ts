import { Component, OnInit } from '@angular/core';
import { VentasTiempo } from '../../../models/VentasTiempo';
import { CarritoService } from '../../services/carrito.service';
import { MostrarCarrito } from '../../../models/MostrarCarrito';

declare var $: any;

@Component({
  selector: 'app-admin-ventas',
  templateUrl: './admin-ventas.component.html',
  styleUrls: ['./admin-ventas.component.css']
})
export class AdminVentasComponent implements OnInit {
  
  mostrarCarritoModel: MostrarCarrito[] = [];
  //Variables de paginacion
  pageSize = 5;
  p = 1;

  ventasDia: VentasTiempo[] = [];
  ventaDia: VentasTiempo = new VentasTiempo();
  totalDia: number = 0;
  gananciaDia: number = 0;
  costoDia: number = 0;
  ticketDia: number = 0;

  ventasSemana: VentasTiempo[] = [];
  ventaSemana: VentasTiempo = new VentasTiempo();
  totalSemana: number = 0;
  gananciaSemana: number = 0;
  costoSemana: number = 0;
  ticketSemana: number = 0;

  ventasMes: VentasTiempo[] = [];
  ventaMes: VentasTiempo = new VentasTiempo();
  totalMes: number = 0;
  gananciaMes: number = 0;
  costoMes: number = 0;
  ticketMes: number = 0;

  ventasAnio: VentasTiempo[] = [];
  ventaAnio: VentasTiempo = new VentasTiempo();
  totalAnio: number = 0;
  gananciaAnio: number = 0;
  costoAnio: number = 0;
  ticketAnio: number = 0;

  ventasSiempre: VentasTiempo[] = [];
  ventaSiempre: VentasTiempo = new VentasTiempo();
  totalSiempre: number = 0;
  gananciaSiempre: number = 0;
  costoSiempre: number = 0;
  ticketSiempre: number = 0;


  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.collapsible').collapsible();
      $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        autoClose: true,
        
      });
    });


  }

  ActualizarFecha(fecha?: any) {
    this.totalDia = 0;
    this.gananciaDia = 0;
    this.costoDia = 0;
    this.ticketDia = 0;
    this.totalSemana = 0;
    this.gananciaSemana = 0;
    this.costoSemana = 0;
    this.ticketSemana = 0;
    this.totalMes = 0;
    this.gananciaMes = 0;
    this.costoMes = 0;
    this.ticketMes = 0;
    this.totalAnio = 0;
    this.gananciaAnio = 0;
    this.costoAnio = 0;
    this.ticketAnio = 0;
    this.totalSiempre = 0;
    this.gananciaSiempre = 0;
    this.costoSiempre = 0;
    this.ticketSiempre = 0;
    let date = fecha;
    if (fecha) {
      $('#fechaD').datepicker({
        format: "yyyy-mm-dd",
        defaultDate: date,
      });

      //DIA
      this.ventaDia.fecha = date;
      this.carritoService.listarVentasDia(this.ventaDia.fecha).subscribe((resVentas: any) => {
        resVentas.forEach((element: any) => {
          this.totalDia += element.monto_eventual;
          this.gananciaDia += element.ganancia;
          this.costoDia += element.costo_eventual;
        }, this);
        this.ventasDia = resVentas;
        console.log(this.ventasDia);
      }, err => console.error(err));
      this.carritoService.ticketPromedioDia(this.ventaDia.fecha).subscribe((resTicket: any) => {
        this.ticketDia = resTicket[0].ticket_promedio;
        this.ticketDia = Math.round(this.ticketDia);
      }, err => console.error(err));

      //SEMANAL
      this.ventaSemana.fecha = date;
      this.carritoService.listarVentasSemana(this.ventaSemana.fecha).subscribe((resVentas: any) => {
        resVentas.forEach((element: any) => {
          this.totalSemana += element.monto_eventual;
          this.gananciaSemana += element.ganancia;
          this.costoSemana += element.costo_eventual;
        }, this);
        this.ventasSemana = resVentas;
      }, err => console.error(err));
      this.carritoService.ticketPromedioSemana(this.ventaSemana.fecha).subscribe((resTicket: any) => {
        this.ticketSemana = resTicket[0].ticket_promedio;
        this.ticketSemana = Math.round(this.ticketSemana);
      }, err => console.error(err));

      //MENSUAL
      this.ventaMes.fecha = date;
      this.carritoService.listarVentasMes(this.ventaMes.fecha).subscribe((resVentas: any) => {
        resVentas.forEach((element: any) => {
          this.totalMes += element.monto_eventual;
          this.gananciaMes += element.ganancia;
          this.costoMes += element.costo_eventual;
        }, this);
        this.ventasMes = resVentas;
      }, err => console.error(err));
      this.carritoService.ticketPromedioMes(this.ventaMes.fecha).subscribe((resTicket: any) => {
        this.ticketMes = resTicket[0].ticket_promedio;
        this.ticketMes = Math.round(this.ticketMes);
      }, err => console.error(err));

      //ANUAL
      this.ventaAnio.fecha = date;
      this.carritoService.listarVentasAnio(this.ventaAnio.fecha).subscribe((resVentas: any) => {
        resVentas.forEach((element: any) => {
          this.totalAnio += element.monto_eventual;
          this.gananciaAnio += element.ganancia;
          this.costoAnio += element.costo_eventual;
        }, this);
        this.ventasAnio = resVentas;
      }, err => console.error(err));
      this.carritoService.ticketPromedioAnio(this.ventaAnio.fecha).subscribe((resTicket: any) => {
        this.ticketAnio = resTicket[0].ticket_promedio;
        this.ticketAnio = Math.round(this.ticketAnio);
      }, err => console.error(err));

      //SIEMPRE
      this.carritoService.listarVentasSiempre().subscribe((resVentas: any) => {
        resVentas.forEach((element: any) => {
          this.totalSiempre += element.monto_eventual;
          this.gananciaSiempre += element.ganancia;
          this.costoSiempre += element.costo_eventual;
        }, this);
        this.ventasSiempre = resVentas;
      }, err => console.error(err));
      this.carritoService.ticketPromedioSiempre().subscribe((resTicket: any) => {
        this.ticketSiempre = resTicket[0].ticket_promedio;
        this.ticketSiempre = Math.round(this.ticketSiempre);
      }, err => console.error(err));

    }
  }

  MostrarCarrito(id: number) {
    this.carritoService.mostrarCarrito(id).subscribe((resCarritoContenido: any) => {
      this.mostrarCarritoModel = resCarritoContenido;
      //console.log(this.venta);
    }, err => console.error(err));
    $('#modalMostrarCarrito').modal();
    $('#modalMostrarCarrito').modal('open');
  }

}
