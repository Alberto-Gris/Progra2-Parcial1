import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioCService } from 'src/app/services/servicio-c.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {
  activatedRoute: any;

  constructor(private route: ActivatedRoute, private correoService: ServicioCService, private router: Router) { }

  ngOnInit(): void {
  }

  contra1: any;
  contra2: any;

  actualizarContrasena(contra1: any, contra2: any) {
    this.route.paramMap.subscribe(params => {
      //el parametro se asigna en el app.routing
      let token = params.get('token');
      console.log(token);
      if (contra1 == contra2) {

        this.correoService.decodificarEmail(token, contra1).subscribe((res: any) => {
          console.log(res);
          if (res) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Contraseña cambiada con exito!!",
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigateByUrl('/login');
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrio un fallo!",
            });
          }
        });
      } else {
        Swal.fire("Las contraseñas no coinciden!");
      }

    });
  }
}
