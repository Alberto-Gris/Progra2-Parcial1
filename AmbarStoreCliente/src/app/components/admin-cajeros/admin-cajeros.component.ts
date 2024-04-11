import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/models/Usuario';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-admin-cajeros',
  templateUrl: './admin-cajeros.component.html',
  styleUrls: ['./admin-cajeros.component.css'],
})
export class AdminCajerosComponent implements OnInit {

  cajeros : Usuario[] = [];
  cajero : Usuario = new Usuario();
  pageSize = 3;
  p = 1;

  constructor(private cajeroService: UsuarioService) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.modal').modal();
    });

    this.cajeroService.list_cajeros().subscribe((resCajeros: any) =>{
      this.cajeros = resCajeros;
      console.log(this.cajeros);
    },err => console.error(err));
  }

  CrearCajero(){
    this.cajero = new Usuario();
    $('#modalNuevoCajero').modal();
    $('#modalNuevoCajero').modal('open'); 
  }

  NuevoCajero(){
    let tamanio = this.cajeros.length;
    while(tamanio > 0){
      tamanio--;
      if(this.cajeros[tamanio].nombre_usuario == this.cajero.nombre_usuario){
        Swal.fire({
          title: "¡Nombre De Usuario Existente!",
          text: "Porfavor, ingrese otro nombre de usuario.",
          icon: "error"
        });
        return;
      }
      if(this.cajeros[tamanio].correo == this.cajero.correo){
        Swal.fire({
          title: "¡Correo Existente!",
          text: "Porfavor, ingrese otro correo.",
          icon: "error"
        });
        return;
      }
    }
    Swal.fire({
      title: "¿Confirmar Registro?",
      text: "Porfavor, verifique que los datos ingresados sean correctos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.cajeroService.crear_cajero(this.cajero.nombre_usuario, this.cajero.nombres, this.cajero.apellidos, this.cajero.correo, this.cajero.contrasena, this.cajero.telefono,this.cajero.direccion).subscribe((resCajero: any) =>{
          //this.cajeros.push(resCajero);
          console.log(resCajero);
          $('#modalNuevoCajero').modal('close');
          this.cajeroService.list_cajeros().subscribe((resCajeros: any) =>{
            this.cajeros = resCajeros;
            console.log(this.cajeros);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Cajero Registrado!",
          text: "Nuevo Cajero Añadido.",
          icon: "success"
        });
      }else{
        $('#modalNuevoCajero').modal('open');
      }
    });
  }

  EditarCajero(id: any){
    this.cajeroService.listOne(id).subscribe((resCajero: any) =>{
      this.cajero = resCajero;
      console.log(this.cajeros);
      $('#modalEditarCajero').modal();
      $('#modalEditarCajero').modal('open');
    },err => console.error(err));
  }

  ConfirmarEdicionCajero(id: any, nombre_usuario: any){
    Swal.fire({
      title: "¿Confirmar Actualización Del Cajero: "+nombre_usuario+"?",
      text: "Porfavor, verifique que los datos actualizados sean correctos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cajeroService.actualizar_cajero(id, this.cajero.correo, this.cajero.telefono, this.cajero.direccion).subscribe((resCajero: any) =>{
          //this.cajeros.push(resCajero);
          console.log(resCajero);
          $('#modalEditarCajero').modal('close');
          this.cajeroService.list_cajeros().subscribe((resCajeros: any) =>{
            this.cajeros = resCajeros;
            console.log(this.cajeros);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Actualizacion Exitosa!",
          text: "Cajero Actualizado.",
          icon: "success"
        });
      }else{
        $('#modalEditarCajero').modal('open');
      }
    });
  }

  HabilitarCajero(id: any, nombre_usuario: any){
    Swal.fire({
      title: "¿Desea Activar Al Cajero: "+nombre_usuario+"?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cajeroService.habilitar_cajero(id).subscribe((resCajero: any) =>{
          this.cajeros.push(resCajero);
          console.log(resCajero);
          this.cajeroService.list_cajeros().subscribe((resCajeros: any) =>{
            this.cajeros = resCajeros;
            console.log(this.cajeros);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Activacion Exitosa!",
          text: "Cajero: "+nombre_usuario+" Activado.",
          icon: "success"
        });
      }
    });
  }

  DeshabilitarCajero(id: any, nombre_usuario: any){
    Swal.fire({
      title: "¿Desea Desactivar Al Cajero: "+nombre_usuario+"?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cajeroService.deshabilitar_cajero(id).subscribe((resCajero: any) =>{
          this.cajeros.push(resCajero);
          console.log(resCajero);
          this.cajeroService.list_cajeros().subscribe((resCajeros: any) =>{
            this.cajeros = resCajeros;
            console.log(this.cajeros);
          },err => console.error(err));
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "¡Desactivacion Exitosa!",
          text: "Cajero: "+nombre_usuario+" Desactivado.",
          icon: "success"
        });
      }
    });
  }
  
}
