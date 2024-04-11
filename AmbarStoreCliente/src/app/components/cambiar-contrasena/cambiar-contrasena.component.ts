import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { ServicioCService } from 'src/app/services/servicio-c.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

declare var $:any;

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {

  constructor(private correoService:ServicioCService , private router: Router) { }

  usuario = new Usuario();

  ngOnInit(): void {
  }

  enviarCorreo(correo:any){
        Swal.fire({
          title: 'Correo enviado',
          text: 'Se ha enviado un correo a su dirección de correo electrónico',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }) 
    this.correoService.enviarCorreoRecuperarContrasena(correo).subscribe((res: any) => {
      console.log(res);
    });
  }

  logueo(){
    this.router.navigateByUrl('/login');
  }
}
