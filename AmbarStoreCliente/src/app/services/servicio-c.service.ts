import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioCService {

  constructor(private http: HttpClient) { }
  
  enviarPromo(oferta:any){
    return this.http.post(`${environment.API_URI_CORREOS}/enviarPromociones`,oferta);
  }

  enviarCorreoRecuperarContrasena(body: any) {
    return this.http.post(`${environment.API_URI_CORREOS}/enviarCorreoRecuperarContrasena`, {"correo": body});
  }

  decodificarEmail(body:any,contra:any) {
    return this.http.post(`${environment.API_URI_CORREOS}/decodificarEmail`, {"token": body, "contrasena": contra});
  }
}
