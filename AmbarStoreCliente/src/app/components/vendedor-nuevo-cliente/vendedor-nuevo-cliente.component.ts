import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-vendedor-nuevo-cliente',
  templateUrl: './vendedor-nuevo-cliente.component.html',
  styleUrls: ['./vendedor-nuevo-cliente.component.css']
})
export class VendedorNuevoClienteComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  usuario = new Usuario();

  crearCliente(){
    this.usuarioService.crear_cliente(this.usuario.nombre_usuario, this.usuario.telefono, this.usuario.correo).subscribe((res: any) => {
      console.log(res.status);
      alert("Cliente creado exitosamente");
    },
    (error: any) => {
      console.log(error);
      alert("Error al crear cliente");
    }
    );
  }
}
