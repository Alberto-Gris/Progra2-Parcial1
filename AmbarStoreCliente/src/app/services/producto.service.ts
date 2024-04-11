import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  crear_producto(producto: any, precio: any, costo: any, cantidad: any, descripcion: any, id_tipoProducto: any, id_tipoDescuento: any){
    return this.http.post(`${environment.API_URI}/productos/create`,{"producto": producto, "precio": precio, "costo": costo, "cantidad": cantidad, "descripcion": descripcion, "id_tipoProducto": id_tipoProducto, "id_tipoDescuento": id_tipoDescuento});
  }

  listar_productos_tipo(id_tipoProducto: any){
    return this.http.get(`${environment.API_URI}/productos/listar_productos_tipo/${id_tipoProducto}`);
  }

  listOne(id_producto: any){
    return this.http.get(`${environment.API_URI}/productos/${id_producto}`);
  }

  actualizar_producto(id_producto: any, producto: any, precio: any, costo: any, cantidad: any, descripcion: any, id_tipoDescuento: any){
    return this.http.put(`${environment.API_URI}/productos/update/${id_producto}`,{"producto": producto, "precio": precio, "costo": costo, "cantidad": cantidad, "descripcion": descripcion,"id_tipoDescuento": id_tipoDescuento});
  }

  eliminar_producto(id_producto: any){
    return this.http.delete(`${environment.API_URI}/productos/delete/${id_producto}`);
  }

  list() {
    return this.http.get(`${environment.API_URI}/productos/`);
  }

  diferencia(id_carrito: any, id_producto: any){
    return this.http.post(`${environment.API_URI}/productos/diferencia`,{"id_carrito": id_carrito, "id_producto": id_producto});
  }
  precioDescuento(id: any){
    return this.http.get(`${environment.API_URI}/descuentos/precioDescuento/${id}`);
  }

  listDescuento(){
    return this.http.get(`${environment.API_URI}/descuentos/`);
  }
}
