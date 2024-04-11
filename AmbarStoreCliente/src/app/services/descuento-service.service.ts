import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescuentoServiceService {

  constructor(private http: HttpClient) { }
  listOne(id_decuento: any){
    return this.http.get(`${environment.API_URI}/descuentos/${id_decuento}`);
  }
  list() {
    return this.http.get(`${environment.API_URI}/descuentos/`);
  }
  crearDescuento(porcentaje:any) {
    return this.http.post(`${environment.API_URI}/descuentos/create`,{"porcentaje": porcentaje});
  }
  actualizarDescuento(id_decuento: any,procentaje:any) {
    return this.http.put(`${environment.API_URI}/descuentos/update/${id_decuento}`,procentaje);
  }
  eliminarDescuento(id_decuento: any) {
    return this.http.delete(`${environment.API_URI}/descuentos/delete/${id_decuento}`);
  }
}
