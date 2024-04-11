import { Component, OnInit } from '@angular/core';
import { TipoProductos } from '../../../models/TipoProducto'
import { TiposProductoService } from '../../services/tipos-producto.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {

  tiposProductos: TipoProductos[] = [];
  //tp : TipoProductos[] = [{id: 1, tipo_producto: "pp"},{id: 3, tipo_producto: "gg"}]
  tipoProducto: TipoProductos = new TipoProductos();

  constructor(private tiposProductosService: TiposProductoService, private router: Router) {

  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('select').formSelect();
    });
    
    localStorage.removeItem('id_tipo_producto');
    localStorage.removeItem('tipo_producto');

    this.tiposProductosService.list().subscribe((resTiposProductos: any) => {
      this.tiposProductos = resTiposProductos;
    }, err => console.error(err));
  }

  seleccionarTipoProducto() {
    if (this.tipoProducto.id != null) {
      this.tiposProductosService.listOne(this.tipoProducto.id).subscribe((resTipoProducto: any) => {
        localStorage.setItem('id_tipo_producto', resTipoProducto.id);
        localStorage.setItem('tipo_producto', resTipoProducto.tipo_producto);
        this.router.navigateByUrl('/admin/productos-secciones');
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

}
