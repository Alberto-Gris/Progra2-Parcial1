 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CrearCarrito } from 'src/models/CrearCarrito';
import { Usuario } from 'src/models/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  usuario = new Usuario();
  crearCarritoModel = new CrearCarrito();

  constructor(private usuarioService: UsuarioService, private router: Router, private carritoService: CarritoService) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  cambioC(){
    this.router.navigateByUrl('/cambio');
  }

  logueo() {
    console.log(this.usuario);
    this.usuarioService.validar_usuario(this.usuario.nombre_usuario, this.usuario.contrasena).subscribe((res: any) => {
      //console.log(res);
      if (res.id != -1) {
        if(res.id_tipoUsuario == 1){
          localStorage.setItem('id_usuario', res.id);
          localStorage.setItem('nombre_usuario', 'Administrador');
          this.router.navigateByUrl('/admin/productos');
        } else {
          localStorage.setItem('id_usuario', res.id);
          localStorage.setItem('nombre_usuario', res.nombre_usuario);
          this.carritoService.crearCarrito(this.crearCarritoModel.confirmado, this.crearCarritoModel.fecha, this.crearCarritoModel.hora, this.crearCarritoModel.monto_eventual_sin_descuento, this.crearCarritoModel.monto_eventual, this.crearCarritoModel.costo_eventual, this.crearCarritoModel.id_cliente, res.id).subscribe((res2: any) => {
            console.log(res2);
            localStorage.setItem('id_carrito', res2);
          });
          this.router.navigateByUrl('/home/productos');
        }
      } else {
        Swal.fire({
          title: "Error de autenticación",
          text: "El usuario o la contraseña son incorrectos.",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      }
    },
      (error: any) => {
        console.log("error xd");
        console.log(error);
      }
    );
  }
}
