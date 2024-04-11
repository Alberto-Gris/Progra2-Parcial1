import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { MostrarCarrito } from 'src/models/MostrarCarrito';
import { VentasTiempo } from 'src/models/VentasTiempo';

declare var $: any;

@Component({
  selector: 'app-vendedor-ventas-dia',
  templateUrl: './vendedor-ventas-dia.component.html',
  styleUrls: ['./vendedor-ventas-dia.component.css'],
  providers: [DatePipe]
})
export class VendedorVentasDiaComponent implements OnInit {

  fechaDeHoy: Date = new Date();
  mostrarCarritoModel: MostrarCarrito[] = [];

  ventasDia: VentasTiempo[] = [];
  ventaDia: VentasTiempo = new VentasTiempo();
  totalDia: number = 0;

  fechaFormateada: any;

  constructor(private datePipe: DatePipe, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.fechaDeHoy.getTime();
    this.fechaFormateada = this.datePipe.transform(this.fechaDeHoy, 'yyyy-MM-dd');

    this.totalDia = 0;
    this.carritoService.listarVentasDia(this.fechaFormateada).subscribe((res: any) => {
      this.ventasDia = res;
      console.log(this.ventasDia);
      this.ventasDia.forEach((element: any) => {
        this.totalDia = this.totalDia + element.monto_eventual;
      });
    });
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
