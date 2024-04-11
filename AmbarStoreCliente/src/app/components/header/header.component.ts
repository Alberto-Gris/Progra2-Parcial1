import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ruta : any;
  nombre_usuario: any;


  constructor(private router: Router, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.nombre_usuario = localStorage.getItem('nombre_usuario');
    this.router = this.router;
  }

  modificarRuta(s: string){
    this.ruta = s;
    //console.log(this.ruta);
  }

  logout(){
    this.carritoService.eliminarCarrito(localStorage.getItem('id_carrito')).subscribe((res: any) => {
      console.log(res);
    });
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
