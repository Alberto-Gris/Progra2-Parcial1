import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }
  
  mostrarCarrito(id: any){
    return this.http.get(`${environment.API_URI}/carritos/mostrar_carrito/${id}`);
  }

  crearCarrito(confirmado: number, fecha: string, hora: string, monto_eventual_sin_descuento: number, monto_eventual: number, costo_eventual: number, id_cliente: number, id_vendedor: number){
    return this.http.post(`${environment.API_URI}/carritos/crear_carrito`,{"confirmado": confirmado, "fecha": fecha, "hora": hora, "monto_eventual_sin_descuento": monto_eventual_sin_descuento, "monto_eventual": monto_eventual, "costo_eventual": costo_eventual, "id_cliente": id_cliente, "id_vendedor": id_vendedor});
  }

  agregarProducto(id_carrito: any, id_producto: any, cantidad: any){
    return this.http.post(`${environment.API_URI}/carritos/agregar_un_producto`,{"id_carrito": id_carrito, "id_producto": id_producto, "cantidad": cantidad});
  }

  eliminarProducto(id_carrito: any, id_producto: any){
    return this.http.post(`${environment.API_URI}/carritos/eliminar_un_producto/`,{"id_carrito": id_carrito, "id_producto": id_producto});
  }

  eliminarTodoElProducto(id_carrito: any, id_producto: any){
    return this.http.post(`${environment.API_URI}/carritos/eliminar_todo_el_producto/`,{"id_carrito": id_carrito, "id_producto": id_producto});
  }

  comprarCarrito(id_carrito: any, fecha: string, hora: string){
    return this.http.post(`${environment.API_URI}/carritos/comprar_carrito/${id_carrito}`,{"fecha": fecha, "hora": hora,});
  }

  eliminarCarrito(id_carrito: any){
    return this.http.delete(`${environment.API_URI}/carritos/eliminar_carrito/${id_carrito}`);
  }



  

  listarVentasDia(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/listar_ventas_dia`,{"fecha": fecha});
    //return this.http.get(`${environment.API_URI}/carritos/listar_ventas_dia`);
  }

  ticketPromedioDia(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/ticket_promedio_dia`,{"fecha": fecha});
  }

  listarVentasSemana(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/listar_ventas_semana`,{"fecha": fecha});
  }

  ticketPromedioSemana(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/ticket_promedio_semana`,{"fecha": fecha});
  }

  listarVentasMes(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/listar_ventas_mes`,{"fecha": fecha});
  }

  ticketPromedioMes(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/ticket_promedio_mes`,{"fecha": fecha});
  }

  listarVentasAnio(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/listar_ventas_anio`,{"fecha": fecha});
  }

  ticketPromedioAnio(fecha: string){
    return this.http.post(`${environment.API_URI}/carritos/ticket_promedio_anio`,{"fecha": fecha});
  }

  listarVentasSiempre(){
    return this.http.get(`${environment.API_URI}/carritos/listar_ventas_siempre`);
  }

  ticketPromedioSiempre(){
    return this.http.get(`${environment.API_URI}/carritos/ticket_promedio_siempre`);
  }

  updateCantidad(id_carrito: any, id_producto: any, cantidad: any){
    return this.http.post(`${environment.API_URI}/carritos/update_cantidad`,{"id_carrito": id_carrito, "id_producto": id_producto, "cantidad": cantidad});
  }

  cantidadesMaximas(id_carrito: any){
    return this.http.post(`${environment.API_URI}/carritos/cantidades_maximas`,{"id_carrito": id_carrito});
  }

}
